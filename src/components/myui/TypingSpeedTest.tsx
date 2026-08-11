"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, RotateCcw } from "lucide-react";

const typingTexts = [
  "The quick brown fox jumps over the lazy dog",
  "DevOps engineers automate infrastructure deployment processes",
  "React makes building interactive user interfaces enjoyable",
  "Kubernetes orchestrates containerized applications at scale",
  "Cloud computing provides on-demand computing resources",
  "Machine learning algorithms learn from data patterns",
  "TypeScript brings static typing to JavaScript development",
  "Git version control enables collaborative software development",
  "Docker containers package applications with dependencies",
  "Artificial intelligence transforms industries and businesses",
  "Software testing ensures code quality and reliability",
  "Agile methodology promotes iterative development practices",
  "Cybersecurity protects systems from malicious attacks",
  "Database design optimizes data storage and retrieval",
  "API design creates scalable communication between services",
  "Frontend development builds beautiful user experiences",
  "Microservices architecture enables independent service deployment",
  "Monitoring tools track application performance metrics",
  "Authentication secures user identity and access control",
  "Continuous integration automates testing and deployment workflows",
];

interface TestResult {
  wpm: number;
  accuracy: number;
  timeSpent: number;
  correctChars: number;
  totalChars: number;
  errorChars: number;
}

interface TypingSpeedTestProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TypingSpeedTest({ isOpen, onClose }: TypingSpeedTestProps) {
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [testStarted, setTestStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize test
  useEffect(() => {
    if (isOpen && !testStarted && !isRunning) {
      const randomText = typingTexts[Math.floor(Math.random() * typingTexts.length)];
      setCurrentText(randomText);
      setUserInput("");
      setTimeLeft(15);
      setResult(null);
      setTestStarted(true);
    }
  }, [isOpen, testStarted, isRunning]);

  const calculateResult = useCallback(() => {
    const words = userInput.trim().split(/\s+/).length;
    const timeSpent = 15 - timeLeft || 1; // Minimum 1 second
    const minutes = timeSpent / 60;
    const wpm = Math.round(words / minutes);

    let correctChars = 0;
    let errorChars = 0;
    for (let i = 0; i < currentText.length; i++) {
      if (userInput[i] === currentText[i]) {
        correctChars++;
      } else if (userInput[i]) {
        errorChars++;
      }
    }

    const totalChars = currentText.length;
    const accuracy = Math.round((correctChars / totalChars) * 100);

    setResult({
      wpm: Math.max(0, wpm),
      accuracy: Math.min(100, accuracy),
      timeSpent,
      correctChars,
      totalChars,
      errorChars,
    });
  }, [userInput, currentText, timeLeft]);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Handle result calculation when time ends
  useEffect(() => {
    if (timeLeft === 0 && isRunning === false && !result) {
      calculateResult();
    }
  }, [timeLeft, isRunning, result, calculateResult]);

  // Check for auto-complete when sentence is finished
  useEffect(() => {
    if (isRunning && userInput.length >= currentText.length && currentText.length > 0) {
      setIsRunning(false);
      calculateResult();
    }
  }, [userInput, currentText, isRunning, calculateResult]);

  const startTest = () => {
    setTimeLeft(15);
    setIsRunning(true);
    setUserInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const resetTest = () => {
    const randomText = typingTexts[Math.floor(Math.random() * typingTexts.length)];
    setCurrentText(randomText);
    setUserInput("");
    setTimeLeft(15);
    setResult(null);
    setIsRunning(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isRunning) return;
    setUserInput(e.target.value);
  };

  const getPerformanceLevel = (wpm: number) => {
    if (wpm < 20) return "Beginner";
    if (wpm < 40) return "Novice";
    if (wpm < 60) return "Intermediate";
    if (wpm < 80) return "Advanced";
    return "Speed Demon 🚀";
  };

  const getPerformanceColor = (wpm: number) => {
    if (wpm < 20) return "text-red-400";
    if (wpm < 40) return "text-yellow-400";
    if (wpm < 60) return "text-green-400";
    if (wpm < 80) return "text-blue-400";
    return "text-purple-400";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-black border-2 border-[#00ffcc] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#00ffcc]/30">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-700 bg-black z-10">
          <h2 className="text-2xl font-bold text-[#00ffcc]">⚡ Typing Speed Test</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#ff00ff] transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {!result ? (
            <>
              {/* Timer */}
              <div className="flex justify-between items-center">
                <div className="text-lg font-mono">
                  <span className="text-gray-400">Time: </span>
                  <span
                    className={`font-bold text-2xl ${
                      timeLeft < 10 ? "text-red-400 animate-pulse" : "text-[#00ffcc]"
                    }`}
                  >
                    {timeLeft}s
                  </span>
                </div>
                {isRunning && (
                  <div className="text-sm">
                    <span className="text-gray-400">Words: </span>
                    <span className="text-[#ff00ff] font-bold">
                      {userInput.trim().split(/\s+/).filter((w) => w.length > 0).length}
                    </span>
                  </div>
                )}
              </div>

              {/* Text Display */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 min-h-[100px]">
                <p className="text-lg leading-relaxed text-gray-300 font-mono">
                  {currentText.split("").map((char, idx) => {
                    let charClass = "";
                    if (idx < userInput.length) {
                      charClass =
                        userInput[idx] === char
                          ? "bg-green-500/30 text-green-300"
                          : "bg-red-500/30 text-red-300";
                    }
                    return (
                      <span key={idx} className={charClass}>
                        {char}
                      </span>
                    );
                  })}
                </p>
              </div>

              {/* Input Field */}
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                disabled={!isRunning}
                placeholder={isRunning ? "Type here..." : "Click 'Start Test' to begin"}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-[#00ffcc] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff00ff] focus:shadow-lg focus:shadow-[#ff00ff]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
              />

              {/* Status and Accuracy */}
              {isRunning && userInput.length > 0 && (
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <div className="text-sm">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Accuracy:</span>
                      <span
                        className={`font-bold ${
                          userInput.length > 0
                            ? "text-[#00ffcc]"
                            : "text-gray-400"
                        }`}
                      >
                        {userInput.length > 0
                          ? Math.round(
                              ((userInput.split("").filter((c, i) => c === currentText[i]).length) /
                                userInput.length) *
                                100
                            )
                          : 0}
                        %
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Errors:</span>
                      <span className="text-red-400 font-bold">
                        {userInput.split("").filter((c, i) => c !== currentText[i]).length}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={startTest}
                  disabled={isRunning}
                  className="flex-1 px-6 py-3 bg-[#00ffcc] text-black font-bold rounded-lg hover:bg-[#ff00ff] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isRunning ? "Running..." : "Start Test"}
                </button>
                <button
                  onClick={resetTest}
                  className="flex-1 px-6 py-3 border-2 border-[#ff00ff] text-[#ff00ff] font-bold rounded-lg hover:bg-[#ff00ff] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} />
                  Reset
                </button>
              </div>
            </>
          ) : (
            // Results Screen
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#00ffcc] mb-2">Test Complete! 🎉</h3>
                <p className="text-gray-400">Here&apos;s how you performed:</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* WPM */}
                <div className="bg-gradient-to-br from-[#00ffcc]/10 to-[#ff00ff]/10 border-2 border-[#00ffcc] p-6 rounded-lg text-center">
                  <p className="text-gray-400 text-sm mb-2">Words Per Minute</p>
                  <p className="text-5xl font-bold text-[#00ffcc]">{result.wpm}</p>
                </div>

                {/* Accuracy */}
                <div className="bg-gradient-to-br from-[#00ffcc]/10 to-[#ff00ff]/10 border-2 border-[#ff00ff] p-6 rounded-lg text-center">
                  <p className="text-gray-400 text-sm mb-2">Accuracy</p>
                  <p className="text-5xl font-bold text-[#ff00ff]">{result.accuracy}%</p>
                </div>

                {/* Time Spent */}
                <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg text-center">
                  <p className="text-gray-400 text-sm mb-2">Time Spent</p>
                  <p className="text-2xl font-bold text-gray-300">{result.timeSpent}s</p>
                </div>

                {/* Errors */}
                <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg text-center">
                  <p className="text-gray-400 text-sm mb-2">Errors</p>
                  <p className="text-2xl font-bold text-red-400">{result.errorChars}</p>
                </div>
              </div>

              {/* Performance Level */}
              <div className="bg-black border-2 border-purple-500 p-6 rounded-lg text-center">
                <p className="text-gray-400 text-sm mb-2">Performance Level</p>
                <p className={`text-4xl font-bold ${getPerformanceColor(result.wpm)}`}>
                  {getPerformanceLevel(result.wpm)}
                </p>
              </div>

              {/* Detailed Stats */}
              <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-3 font-bold">Detailed Stats</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Correct Characters:</span>
                    <span className="text-green-400 font-bold">{result.correctChars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Characters:</span>
                    <span className="text-gray-300 font-bold">{result.totalChars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wrong Characters:</span>
                    <span className="text-red-400 font-bold">{result.errorChars}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={resetTest}
                  className="flex-1 px-6 py-3 bg-[#00ffcc] text-black font-bold rounded-lg hover:bg-[#ff00ff] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} />
                  Try Again
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:border-[#ff00ff] hover:text-[#ff00ff] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

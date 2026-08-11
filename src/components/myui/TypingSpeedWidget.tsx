"use client";
import { useState } from "react";
import { Zap } from "lucide-react";
import TypingSpeedTest from "./TypingSpeedTest";

export default function TypingSpeedWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating Widget Button with Tooltip */}
      <div className="fixed bottom-24 right-8 z-40 flex items-end gap-3">
        {/* Tooltip Text */}
        {showTooltip && (
          <div className="animate-fade-in-down bg-gradient-to-r from-[#00ffcc] to-[#ff00ff] p-3 rounded-lg whitespace-nowrap text-black font-bold text-sm shadow-lg">
            <p className="flex items-center gap-2">
              Test your typing speed! ⚡
              <button
                onClick={() => setShowTooltip(false)}
                className="ml-2 text-xs opacity-70 hover:opacity-100"
              >
                ✕
              </button>
            </p>
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black border-2 border-[#ff00ff] text-[#ff00ff] p-4 rounded-full hover:bg-[#ff00ff] hover:text-black hover:shadow-lg hover:shadow-[#ff00ff]/40 transition-all duration-300 animate-bounce shadow-lg shadow-[#ff00ff]/20 group"
          title="Test your typing speed!"
          aria-label="Typing speed test"
        >
          <div className="flex items-center gap-2">
            <Zap size={24} className="group-hover:scale-125 transition-transform duration-300" />
          </div>
        </button>
      </div>

      {/* Modal */}
      <TypingSpeedTest isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

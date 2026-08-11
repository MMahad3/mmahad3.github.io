"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyToClipboardProps {
  text: string;
  label: string;
}

export default function CopyToClipboard({ text, label }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-3 py-1 rounded-lg border-2 border-[#00ffcc] text-[#00ffcc] hover:border-[#ff00ff] hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all duration-300"
      title="Copy to clipboard"
    >
      {label}
      {copied ? (
        <Check size={16} className="text-green-400" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );
}

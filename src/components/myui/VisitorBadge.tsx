"use client";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { Users } from "lucide-react";

export default function VisitorBadge() {
  const { visitorCount, isLoading } = useVisitorCount();

  if (isLoading) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#00ffcc] rounded-lg bg-black text-[#00ffcc] animate-pulse">
        <Users size={18} />
        <span className="text-sm font-mono">Counting visitors...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#00ffcc] rounded-lg bg-black text-[#00ffcc] hover:border-[#ff00ff] hover:shadow-lg hover:shadow-[#ff00ff]/30 transition-all duration-300">
      <Users size={18} className="animate-bounce" />
      <span className="text-sm font-mono font-bold">
        {visitorCount} visitor{visitorCount !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

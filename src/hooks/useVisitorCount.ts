"use client";
import { useEffect, useState } from "react";

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get or initialize visitor count from localStorage
    const storedCount = localStorage.getItem("portfolio_visitor_count");
    const currentCount = storedCount ? parseInt(storedCount) : 0;
    
    // Increment and save
    const newCount = currentCount + 1;
    localStorage.setItem("portfolio_visitor_count", newCount.toString());
    
    // Track in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
        visitor_number: newCount,
      });
    }
    
    setVisitorCount(newCount);
    setIsLoading(false);
  }, []);

  return { visitorCount, isLoading };
}

// components/SplashScreen.tsx

import { useEffect, useState } from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import { Meteors } from "@/components/magicui/meteors";


export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish(); // tell the parent it's done
    }, 3000); // show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    
    <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center flex-col animate-fadein">
        <Meteors/>
      <HyperText className="text-[#00ffcc] text-4xl sm:text-4xl text-[#00ffcc] font-bold">
        This is Mahad&apos;s portfolio
      </HyperText>
      <p className="mt-2 text-gray-400">Loading...</p>
    </div>
  );
}

"use client";
import { MyExperiences, MyProjects, UserData } from "../../public/data/config";
import img from "../../public/selfpic.jpg";
import Image from "next/image";
import { Github, Linkedin, UserSearch } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/myui/Navbar";
import { NumberTicker } from "@/components/magicui/number-ticker";
import "./globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Meteors } from "@/components/magicui/meteors";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useState } from "react";
import SplashScreen from "@/components/myui/splashscreen";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  function getCompletedProjects() {
    let x = 0;
    MyProjects.content.map((item) => {
      if (item.endDate !== "Present") x += 1;
    });
    return x;
  }
  if (!loadingDone) {
    return <SplashScreen onFinish={() => setLoadingDone(true)} />;
  }
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <ScrollArea className="bg-black h-[calc(100%-45px)] animate-fadein">
      <Meteors />
        <main
          className={`flex p-2 lg:px-40 lg:py-28 h-10 w-screen flex-col transition-all duration-1000`}
        >
          <div
            className={` flex flex-col lg:flex-row lg:justify-normal justify-center items-center`}
          >
            {/* Content */}
            <div
              className={`flex flex-col lg:justify-normal justify-center items-center lg:items-start text-center lg:text-start transition-all duration-1000 animate-enterleft`}
            >
              <h1 className="text-[#00ffcc] text-5xl font-bold w-auto flex flex-col">
                <div className="">
                  <TypingAnimation className="inline text-6xl">
                  Hi! I am
                  </TypingAnimation>
                  
                  
                  <span className="text-[#ff00ff]"> <TypingAnimation className="inline text-6xl">Mahad</TypingAnimation> </span> 
                  
                  <span className="text-[#ff00ff]"> <TypingAnimation className="inline text-6xl">Munir</TypingAnimation> </span>
                  
                </div>
                <div className="w-auto relative mt-4 md:mt-0">
                  <div className="absolute inset-x-[12.5%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
                  <div className="absolute inset-x-[12.5%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px]" />
                  <div className="absolute inset-x-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
                  <div className="absolute inset-x-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px]" />
                </div>
              </h1>
              <h2 className="pt-4 pb-2 text-lg font-mono text-gray-600">
                {UserData.profession}
              </h2>
              <p className="text-white flex lg:w-auto pb-4 px-4 lg:pr-20 lg:px-0">
                {UserData.about}
              </p>
              <div className="text-white flex justify-evenly items-center  w-[80%] h-auto p-4 mb-2">
                <div className="h-full items-center flex flex-col">
                  <div className="flex text-5xl">
                    <NumberTicker
                      value={getCompletedProjects()}
                      className="text-white text-5xl font-medium tracking-tighter flex-1 justify-center flex mb-1"
                    />
                  </div>
                  Projects Completed
                </div>
                <div className="text-white h-full items-center flex flex-col">
                  <div className="flex text-5xl">
                    <NumberTicker
                      value={1}
                      className="text-white text-5xl font-medium tracking-tighter flex-1 justify-center flex mb-1"
                    />
                    +
                  </div>
                  Years of Experience
                </div>
                <div className="text-white h-full items-center flex flex-col">
                  <div className="flex text-5xl">
                    <NumberTicker
                      value={MyExperiences.content.length}
                      className="text-white font-medium tracking-tighter flex-1 justify-center mb-1"
                    />
                  </div>
                  Organiztions worked with
                </div>
              </div>
              <p className="flex gap-x-3">
                <Link
                  href={UserData.github}
                  className="text-white rounded-full p-2 transition-all duration-300 hover:text-[#ff00ff] hover:scale-110"
                >
                  <Github />
                </Link>
                <Link
                  href={UserData.linkedin}
                  className="text-white rounded-full p-2 transition-all duration-300 hover:text-[#ff00ff] hover:scale-110"
                >
                  <Linkedin />
                </Link>
                <Link
                  href={"/Contact"}
                  className="text-white rounded-full p-2 transition-all duration-300 hover:text-[#ff00ff] hover:scale-110"
                >
                  <UserSearch />
                </Link>
              </p>
            </div>
            
            
            {/* Image */}
            
            <div
              className="flex mt-4 transition-all duration-1000 animate-enterright"
>
             <Image
             src={img}
             alt="Self Pic"
            className="w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] md:w-[30rem] md:h-[30rem] lg:w-[50rem] lg:h-[20rem] object-cover rounded-lg border-4 border-white shadow-[0_0_15px_#00FFFF] shadow-2xl transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_#ff00ff]"
            />
           </div>
           

          </div>
        </main>
        
      </ScrollArea>
    </div>
  );
}

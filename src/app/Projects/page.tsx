import Navbar from "@/components/myui/Navbar";
import { Separator } from "@/components/ui/separator";
import { MyProjects, MySkills } from "../../../public/data/config";
import { CalendarClock, Component, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Metadata } from "next";
import { Meteors } from "@/components/magicui/meteors";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  function getPath(skill: string) {
    return MySkills.content
      .map(
        (group) => group.content.find((item) => item.name === skill)?.imgpath
      )
      .slice().sort()[0];

  }
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Meteors />
      <ScrollArea className="h-[calc(100%-45px)] animate-fadein">
        <ScrollBar className="" />
        <main
          className={`my-10 w-full flex justify-center transition-all duration-1000`}
        >
          <div className="flex px-4 md:px-14 justify-center flex-col">
            <h1 className="text-7xl font-bold flex justify-center mb-5 text-[#00ffcc]">
              Projects
            </h1>
            <div className="flex flex-wrap justify-center gap-y-4 md:gap-x-4">
              {MyProjects.content.map((item, index) => {
                return (
                  <section
                    key={index}
                    className="flex md:flex-1 flex-col w-full h-auto md:min-w-[300px] md:max-w-[300px] p-5 transition-all duration-500 rounded-xl border-2 border-[#00ffcc] bg-black text-white hover:border-[#ff00ff] hover:shadow-lg hover:shadow-[#ff00ff]/30 group cursor-pointer"
                  >
                      {item.Logo ? (
                        <Image src={item.Logo} alt="" width={50} height={50} className="group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <></>
                      )}
                      <div className="font-bold text-lg mt-4 flex items-center text-[#00ffcc] group-hover:text-[#ff00ff] transition-colors duration-300">
                        {item.title}
                        <Link
                          href={item.link}
                          className="hover:bg-[#00ffcc] hover:text-black transition-all duration-100 rounded-lg ml-2 p-1"
                        >
                          <ExternalLink className="scale-[60%]" />
                        </Link>
                      </div>
                      <Separator className="my-4 bg-gray-600" />
                      <div className="text-sm text-gray-300 flex items-center mb-2">
                        <Component className="scale-[70%] text-[#00ffcc] mr-2" />
                        <span className="group-hover:text-[#ff00ff] transition-colors duration-300">{item.type}</span>
                      </div>
                      <div className="text-sm text-gray-300 flex items-center mb-4">
                        <CalendarClock className="scale-[70%] text-[#00ffcc] mr-2" />
                        <span className="group-hover:text-[#ff00ff] transition-colors duration-300">
                          {item.startDate === ""
                            ? "Planning"
                            : item.startDate + " - " + item.endDate}
                        </span>
                      </div>
                      <div className="text-sm text-gray-300 flex flex-1 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </div>
                      <Separator className="my-4 bg-gray-600" />
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((item, index) => (
                          <HoverCard openDelay={50} closeDelay={50} key={index}>
                            <HoverCardTrigger asChild>
                              <div className="w-10 h-10 border-2 border-[#00ffcc] rounded-md flex justify-center items-center hover:border-[#ff00ff] hover:bg-[#ff00ff] hover:scale-110 transition-all duration-300 bg-black">
                                <Image
                                  src={`${getPath(item)}`}
                                  alt=""
                                  width={20}
                                  height={1}
                                />
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent
                              className="w-auto p-[2px] px-3 text-sm bg-black border border-[#00ffcc] text-[#00ffcc]"
                              side="top"
                            >
                              {item}
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      </ScrollArea>
    </div>
  );
}

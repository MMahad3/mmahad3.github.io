import Navbar from "@/components/myui/Navbar";
import Link from "next/link";
import { UserData } from "../../../public/data/config";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import selfpic from "../../../public/selfpic.jpg";
import { Metadata } from "next";
import { Meteors } from "@/components/magicui/meteors";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import CopyToClipboard from "@/components/myui/CopyToClipboard";

export const metadata: Metadata ={
  title: 'Contact'
}

export default function Contact() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Meteors />
      <main
        className={`flex p-2 lg:px-32 lg:py-20 h-10 w-screen flex-col transition-all duration-1000 animate-fadein`}
      >
        <div
          className={`flex flex-col lg:flex-row lg:justify-normal justify-center items-center`}
        >
          <section className="lg:w-1/2 p-10">
            <div className="text-[#00ffcc] text-9xl lg:text-7xl font-bold">
              <TypingAnimation> Interested in collaborating ? </TypingAnimation>
            </div>
            <div className="mt-10 border-2 border-[#00ffcc] rounded-xl p-6 w-full bg-black hover:border-[#ff00ff] hover:shadow-lg hover:shadow-[#ff00ff]/20 transition-all duration-300">
              <div className="text-[#00ffcc] text-3xl font-bold mb-6">Contact me!</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Mail className="text-[#00ffcc] mr-3" size={20} />
                    <span className="text-gray-300">{UserData.email}</span>
                  </div>
                  <CopyToClipboard text={UserData.email} label="Copy" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="text-[#00ffcc] mr-3" size={20} />
                    <span className="text-gray-300">{UserData.phone}</span>
                  </div>
                  <CopyToClipboard text={UserData.phone} label="Copy" />
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-600 pt-6">
                <div className="text-gray-400 text-sm mb-4">Follow me on:</div>
                <div className="flex gap-4">
                  <Link href="https://github.com/mmahad3" target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 p-2 rounded-lg transition-all duration-300">
                    <Github size={24} />
                  </Link>
                  <Link href="https://linkedin.com/in/mahad-munir" target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 p-2 rounded-lg transition-all duration-300">
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-1 justify-center items-center w-auto">
          <Link href="/" passHref>
          <Image
             src={selfpic}
             alt="Self Pic"
            className="w-80 h-80 object-cover border-4 border-white shadow-[0_0_15px_#00FFFF] shadow-2xl transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_#ff00ff]"
            />
           
           </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

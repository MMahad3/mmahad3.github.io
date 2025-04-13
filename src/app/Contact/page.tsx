import Navbar from "@/components/myui/Navbar";
import Link from "next/link";
import { UserData } from "../../../public/data/config";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import selfpic from "../../../public/selfpic.jpg";
import { Metadata } from "next";
import { Meteors } from "@/components/magicui/meteors";
import { TypingAnimation } from "@/components/magicui/typing-animation";

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
            <p className="text-[#00ffcc] text-9xl lg:text-7xl font-bold">
              <TypingAnimation> Interested in collaborating ? </TypingAnimation>
            </p>
            <div className="mt-10 border rounded-xl p-4 w-full">
              <div className="text-[#00ffcc] text-3xl font-bold mb-2">Contact me!</div>
              <div className="flex p-2">
                <Mail className="text-[#00ffcc] mr-2" />
                <Link
                  className="text-[#00ffcc] hover:text-[#ff00ff] rounded-full "
                  href={`mailto:${UserData.email}`}
                >
                  {UserData.email}
                </Link>
              </div>
              <div className="flex items-center p-2">
                  <Phone className="text-[#00ffcc] mr-2" />
                  <span className="text-[#00ffcc] hover:text-[#ff00ff]">{UserData.phone}</span>
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

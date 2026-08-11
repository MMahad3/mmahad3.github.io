"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-700 bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section - Brand */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[#00ffcc] font-bold text-lg mb-2">
              Mahad Munir
            </p>
            <p className="text-gray-400 text-sm">
              DevOps Engineer | Cloud & AI Enthusiast
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
            >
              Home
            </Link>
            <Link
              href="/Experience"
              className="text-gray-300 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
            >
              Experience
            </Link>
            <Link
              href="/Skills"
              className="text-gray-300 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
            >
              Skills
            </Link>
            <Link
              href="/Projects"
              className="text-gray-300 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
            >
              Projects
            </Link>
            <Link
              href="/Contact"
              className="text-gray-300 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/mmahad3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffcc] hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 p-2 rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/mahad-munir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffcc] hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 p-2 rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:mmahad3@gmail.com"
              className="text-[#00ffcc] hover:text-[#ff00ff] hover:bg-[#ff00ff]/10 p-2 rounded-lg transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Mahad Munir. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <span className="text-[#00ffcc]">Next.js</span> & 
            <span className="text-[#ff00ff]"> Tailwind CSS</span>
            <ExternalLink size={12} />
          </p>
        </div>
      </div>
    </footer>
  );
}

// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import ScrollToTopButton from "./ScrollToTopButton";
import NextIcon from "../../public/next.svg";
import TailwindIcon from "../../public/tailwind.svg";
import TypescriptIcon from "../../public/typescript.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-2 border-black mt-8 sm:mt-12 bg-white">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <Link href="/" className="inline-block">
              <h2 className="text-lg sm:text-xl font-bold tracking-tighter flex items-center">
                <span className="border-2 border-black px-1 bg-cyan-300 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                  ctrl
                </span>
                <span className="mx-1 font-bold">+</span>
                <span className="border-2 border-black px-1 bg-yellow-300 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                  alt
                </span>
                <span className="mx-1 font-bold">+</span>
                <span className="border-2 border-black px-1 bg-pink-300 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
                  reset
                </span>
              </h2>
            </Link>
          </div>

          <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-0 flex-wrap justify-center">
            <Link href="/" className="hover:underline font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:underline font-medium">
              About
            </Link>
            <Link href="/blog" className="hover:underline font-medium">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline font-medium">
              Contact
            </Link>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-2 hover:bg-cyan-300 transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
            <a
              href="https://github.com/reset-egs/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-2 hover:bg-yellow-300 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/szymon-zwara-6b4349224/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-2 hover:bg-pink-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t-2 border-black mt-6 pt-4 sm:pt-6 text-sm">
          <p className="text-center mb-3">Built with</p>
          <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-cyan-100 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
              <NextIcon className="text-cyan-700" />
              <span className="text-cyan-700">Next.js</span>
            </span>
            <span className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-pink-100 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
              <TailwindIcon className="text-pink-700" />
              <span className="text-pink-700">Tailwind</span>
            </span>
            <span className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-yellow-100 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
              <TypescriptIcon className="text-yellow-700" />
              <span className="text-yellow-700">TypeScript</span>
            </span>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;

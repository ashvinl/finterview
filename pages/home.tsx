import Link from "next/link";
import React from "react";
import "../styles/globals.css";
import LogoImage from "../public/images/finterview-logo.png";
import Image from "next/image";
import Card from "../components/Card";;

export default function Home() {
  return (
    <div>
      <div className="bg-[#0C5339] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <Image src={LogoImage} alt="logo" height="20" width="20" />
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-white hover:text-white"
                >
                  <span className="font-bold">Finterview</span>
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-5">
              <div>
                <a href="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Welcome back, First Name</h1>
      <h1>Past Interviews</h1>
      <Card children={"test"} />
    </div>
  );
}

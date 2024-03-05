import Link from "next/link";
import React from "react";
import "../styles/globals.css";
import LogoImage from "../public/images/finterview-logo.png";
import Image from "next/image";
import Card from "../components/Card"

export default function Home() {
  return (
    <div>
       
<div className="bg-[#0C5339] text-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        
        <div>
          <a href="#" className="flex items-center py-5 px-2 text-white hover:text-white">
           
            <span className="font-bold">Logo</span>
          </a>
        </div>
        
        
      </div>
     
      <div className="hidden md:flex items-center space-x-1">
        
        <a href="#" className="py-2 px-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-white">Logout</a>
      </div>
    </div>
  </div>
</div>
    <Card children = {"test"}/>


    </div>
  );
}



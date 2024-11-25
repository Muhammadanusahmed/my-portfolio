"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Data from "@/data/Sec2card.json";

export default function BackgroundGradientDemo() {

  interface Courses {
    id: number;
    title: string;
    image_url: string;
  }

  function LimitedData(){
    if (screen.width < 768) {

      let mobData = Data.filter((item: Courses) => item.id <= 6); 
      return mobData;
    } else {
      return Data;
    }
  } 

  return (
    <div className="pb-24 border-b-2 border-teal-600">
      
        <h1 id="experience" className="text-2xl md:text-3xl px-4 text-center pb-4 font-extrabold text-white">
          MY CORE DEVELOPMENT SKILLS
        </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-4 md:gap-x-12 md:gap-y-8 px-10 md:px-20 justify-center">
     
      { Data.map((item: Courses) => (
      
        <BackgroundGradient key={item.id} className="rounded-[22px] min-w-sm md:min-w-md p-3 lg:p-6 bg-white dark:bg-zinc-900">
      <div className="flex flex-col justify-center text-center">
            <Image
              src={item.image_url}
              alt="jordans"
              height="120"
              width="120"
              className="rounded-md"
            />
            <p className="text-xl text-black mt-1 md:mt-3 dark:text-neutral-200">
              {item.title}
            </p>
          </div>
       </BackgroundGradient>
  
    )
  )}
    
      
</div>
    </div>
  );
}

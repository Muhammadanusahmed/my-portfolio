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

  return (
    <div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Core Skills
        </h2>
        <p className="mt-2 text-3xl pb-10 leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Development and Designes 
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
     
      { Data.map((item: Courses) => {
    return(
      
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div key={item.id} className="text-center">
            <Image
              src={item.image_url}
              alt="jordans"
              height="130"
              width="130"
              className="object-contain text-center"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.title}
            </p>
          </div>
       </BackgroundGradient>
  
    )
  })};
    
      
</div>
    </div>
  );
}

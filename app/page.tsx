"use client"

import { useState } from "react";
import Circle from "./components/Circle";

export default function Home() {

  const [isHovered , setIsHovered] = useState(false);

  const mouseEntered = ()=>{
    setIsHovered(true)
  }

  const mouseLeaved = ()=>{
    setIsHovered(false)
  } 

  return (
   <div className="w-full h-screen flex items-center justify-center">
    <div className={`flex items-center justify-center relative w-min ${isHovered ? 'gap-9': ''}`}>

    <Circle color={'#D5C797'} text={'design'} onHovering={mouseEntered} onLeaving={mouseLeaved} />
    
      { isHovered &&
      <div className={`h-2 w-2 rounded-full bg-[rgb(234,179,8)] absolute left-22 animate-scaleUp opacity-85 flex items-center justify-center`}>
        <p className="text-[.5px]">frontend design</p>
      </div>
      }
     
    <Circle color={'#41302E'} text={'developement'}  onHovering={mouseEntered} onLeaving={mouseLeaved} />

    </div>
   </div>
   
  );
}

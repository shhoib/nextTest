"use client"

import { useState } from "react";
import Circle from "./components/Circle";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEntered = () => {
    setIsHovered(true);
  }

  const mouseLeaved = () => {
    setIsHovered(false);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center relative w-min">
        <Circle  color="#D5C797" text="design" onHovering={mouseEntered} 
          onLeaving={mouseLeaved}  isHovered={isHovered}  animationClass="animate-moveLeft" />

        {isHovered && (
          <div className="h-2 w-2 rounded-full bg-[rgb(234,179,8)] absolute left-22 animate-scaleUp opacity-85 flex items-center justify-center z-10">
            <p className="text-[.5px]">frontend design</p>
          </div>
        )}

        <Circle color="#41302E" text="development" onHovering={mouseEntered} 
          onLeaving={mouseLeaved} isHovered={isHovered}  animationClass="animate-moveRight" />
      </div>
    </div>
  );
}

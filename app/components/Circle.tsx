import React from 'react';

interface CircleProps {
  color: string;
  onHovering?: () => void;
  onLeaving?: () => void;
  text: string;
  isHovered: boolean;
  animationClass: string;
}

const Circle: React.FC<CircleProps> = ({ color, onHovering, onLeaving, text, isHovered, animationClass }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      onMouseOver={onHovering}
      onMouseLeave={onLeaving}
      className={`w-48 h-48 rounded-full flex items-center justify-center transition-transform ${isHovered ? animationClass : ''}`}
    >
      <h1>{text}</h1>
    </div>
  );
}

export default Circle;

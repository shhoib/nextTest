interface  CircleProps {
    color : string;
    onHovering? : ()=>void 
    onLeaving? : ()=>void ;
    text : string
}

const Circle:React.FC<CircleProps> = ({color,onHovering,onLeaving,text}) => {
  return (
    <div style={{ backgroundColor: color }} onMouseOver={onHovering} onMouseLeave={onLeaving} className="w-48 h-48 rounded-full flex items-center justify-center">
        <h1>{text}</h1>
    </div>
  )
}

export default Circle;
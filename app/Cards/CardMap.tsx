'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import parse from 'html-react-parser';
import { useRouter } from "next/navigation";

interface cardMapProps {
    dat : any
}
const CardMap:React.FC<cardMapProps> = ({dat}) => {

  const router = useRouter();

  const HandleNavigateCardDetails = () =>{
    router.push(`/Cards/${dat.id}`)
  }

  return (
    <div className="w-[350px] flex flex-col items-center justify-center bg-slate-200 rounded-xl p-5">
     <div className="relative w-full aspect-square">
     <Image src={dat.image} alt={dat.image} fill className="object-contain rounded-md"/>
     </div>
     <h2 className="font-bold py-2 break-all">{dat.meta_data.name}</h2>
     <h5 className="text-slate-700 text-[14px]">{parse(dat.meta_data.content.length > 40
          ? dat.meta_data.content.substring(0, 70) + '...'
          : dat.meta_data.content
      )}
      </h5>
      <button onClick={HandleNavigateCardDetails} className="bg-blue-500 px-14 py-2 rounded-xl text-white mt-7 hover:bg-blue-600 hover:rounded-2xl transition-all">Read more</button>
    </div>
  )
}

export default CardMap
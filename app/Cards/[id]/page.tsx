'use client'
import axios from 'axios'
import Image from 'next/image';
import { useEffect, useState } from "react"
import parse from 'html-react-parser';


interface BlogData {
  id: number;
  image : string;
  meta_data: {
    name: string;
    content: string;
  };
}

const CardDetails = ({params}:any) => {

  const id = params.id
  

  const [data, setData] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://app-server.sketchappsolutions.com/api/BlogsListView');        
        const foundData = response.data.results.find((item: BlogData) => item.id === parseInt(id));
        setData(foundData || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);
 

  if (!data) {
    return <div>Loading...</div>;
  }
    
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className='w-[80%] mt-10'>
      <div className='flex'>
      <div className="relative w-[30%] aspect-square">
       <Image src={data.image} alt={data.image} fill className="object-contain rounded-md"/>
      </div>
      <h1 className='text-3xl p-5 mt-5'>{data?.meta_data?.name}</h1>
      </div>
      {/* <h6 className='mt-7'>{parse(data?.meta_data?.content)}</h6> */}
     </div>
    </div>
  )
}

export default CardDetails
"use client"

import { useEffect, useState } from "react"
import axios from 'axios'
import CardMap from "./CardMap";

interface BlogData {
    id: number;
    image : string;
    name: string;
    content: string;
  }

const Cards = () => {

    const [data, setData] = useState<BlogData[]>([]);

    useEffect(()=>{
     const fetchData = async () => {
        try {
          const response = await axios.get('https://app-server.sketchappsolutions.com/api/BlogsListView');
          setData(response.data.results); 
        } catch (error) {
         console.error("Error fetching data:", error);
        }
    }

    fetchData();
    },[])

    console.log(data);
    

  return (
    <div className="flex flex-wrap items-center justify-center gap-14 pt-10">
      {
        data.map((dat)=>{
            return (
                <CardMap key={dat.id} dat={dat}/>
            )
        })
      }
    </div>
  )
}

export default Cards
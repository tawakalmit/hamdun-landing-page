
import Layout from "../components/Layout"
import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
    const [gambar, setGambar] = useState([
        {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14},{id: 15},{id: 16},{id: 17},{id: 18},{id: 19},{id: 20},{id: 21},{id: 23},{id: 24},{id: 25},{id: 26},{id: 27},{id: 28},{id: 29},{id: 30},{id: 31},{id: 32},{id: 33},{id: 34},{id: 35},{id: 36},{id: 37},{id: 38},{id: 39},{id: 40},{id: 41},
      ],);
  return (
    <>
    <Layout 
    content={
        <div className="w-10/12 mx-auto mt-20">

        <h1 className="text-3xl font-bold text-center md:text-left">Gallery</h1>

        <div className="w-11/12 mx-auto flex justify-evenly items-center flex-wrap mt-5">
            
            {gambar.map((data) => (<div className="m-2" key={data.id}><Image src={`/carousel/carousel (${data.id}).jpeg`} width={500} height={380} className="rounded-xl" alt="slider" /></div>))}
            
        </div>

        </div>
    }
    
    />
    </>
  )
}

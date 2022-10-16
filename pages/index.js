import Navbar from "../components/Navbar"
import HamdunHead from "../components/HamdunHead"
import Jumbotron from "../components/Jumbotron"
import Drawer from "../components/Drawer"

import Image from "next/image"

export default function Home() {
  return (
    <>
    <HamdunHead title="Home" />
    <Navbar />
    <Jumbotron />
    <div className='w-full mt-10'>
        <div className='w-10/12 mx-auto flex-col flex md:flex-row items-center justify-center'>
            <div className='w-full md:w-[40rem] ml-0 md:ml-20'>
                <ul className='list-disc'>
                <li className='mb-5 md:mb-0'>Para alumni pondok pesantren memiliki peran penting dalam menjaga eksistensi pondok pesantren yg menjadi almamaternya.</li>
                <li className='mb-5 md:mb-0'>Solidaritas para alumni yang terbangun secara apik akan memperkuat posisi tawar para alumni di tengah tengah masyarakat .</li>
                <li className='mb-5 md:mb-0'>Keberkahan yang di dapat oleh para alumni juga tidak bisa di lepaskan dari kepedulian para alumni kepada almameter nya.</li>
                </ul>
                <p className='mt-10 font-bold text-center'>Yuk Ahh, Gass keun !</p>
            </div>
        </div>
    </div>
    <Drawer /> 
    
    
    </>
  )
}

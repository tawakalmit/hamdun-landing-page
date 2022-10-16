import Navbar from "../components/Navbar"
import HamdunHead from "../components/HamdunHead"
import Jumbotron from "../components/Jumbotron"
import Drawer from "../components/Drawer"
import ProfileCard from "../components/ProfileCard"

import Image from "next/image"

export default function Home() {
  return (
    <>
    <HamdunHead title="Home" />
    <Navbar />
    <Jumbotron />
    <div className='w-full mt-10 mb-20'>
        <div className='w-10/12 mx-auto flex-col flex md:flex-row items-center justify-center'>
          <ProfileCard
          image="/carousel/carousel (28).jpeg"
          description="Para alumni pondok pesantren memiliki peran penting dalam menjaga eksistensi pondok pesantren yg menjadi almamaternya."
          />
          
          <ProfileCard
          image="/carousel/carousel (21).jpeg"
          description="Solidaritas para alumni yang terbangun secara apik akan memperkuat posisi tawar para alumni di tengah tengah masyarakat."
          />

          <ProfileCard
          image="/carousel/carousel (27).jpeg"
          description="Keberkahan yang di dapat oleh para alumni juga tidak bisa di lepaskan dari kepedulian para alumni kepada almameter nya."
          />
        </div>
        <h1 className="text-center text-3xl font-bold mt-10">Yuk Ahh, Gasskeun!</h1>
    </div>
    <Drawer /> 
    
    
    </>
  )
}

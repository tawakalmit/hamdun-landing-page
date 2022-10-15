import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { FiMenu } from "react-icons/fi"
import { useRouter } from 'next/router'

export default function Navbar() {

  const [show, setShow] = useState(false);

  const router = useRouter();

  return (
    <>
    <nav className=' fixed top-0 z-10 w-full h-[4rem] bg-[#25274C]'>
        <div className='w-10/12 mx-auto h-[4rem] flex items-center justify-between'>
            <p onClick={(e) => router.push('/') } className='cursor-pointer text-white font-semibold text-3xl'>Hamdun</p>
            <FiMenu onClick={(e) => handleshow()} size={30} color="white" className='opacity-0 md:hidden' />
            <div className='w-[30rem] hidden md:flex justify-between'>
                <p onClick={(e) => router.push('/') } className='text-white hover:opacity-60'>Beranda</p>
                <p onClick={(e) => router.push('/profil') } className='text-white hover:opacity-60'>Profil</p>
                <p onClick={(e) => router.push('/jadwal') } className='text-white hover:opacity-60'>Jadwal</p>
                <p onClick={(e) => router.push('/artikel') } className='text-white hover:opacity-60'>Artikel</p>
                <p onClick={(e) => router.push('/berita') } className='text-white hover:opacity-60'>Berita</p>
                <p onClick={(e) => router.push('/gallery') } className='text-white hover:opacity-60'>Gallery</p>
                <p onClick={(e) => router.push('/pustaka') } className='text-white hover:opacity-60'>Pustaka</p>
            </div>
        </div>
    </nav>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import { FiMenu } from "react-icons/fi"

export default function Navbar() {
  return (
    <>
    <nav className='w-full h-[4rem] bg-[#25274C]'>
        <div className='w-10/12 mx-auto h-[4rem] flex items-center justify-between'>
            <a href='/' className='text-white font-semibold text-3xl'>Hamdun</a>
            <FiMenu size={30} color="white" className='md:hidden' />
            <div className='w-[30rem] hidden md:flex justify-between'>
                <a href="/" className='text-white hover:opacity-60'>Beranda</a>
                <a href="/jadwal" className='text-white hover:opacity-60'>Jadwal</a>
                <a href="/artikel" className='text-white hover:opacity-60'>Artikel</a>
                <a href="/berita" className='text-white hover:opacity-60'>Berita</a>
                <a href="/gallery" className='text-white hover:opacity-60'>Gallery</a>
                <a href="/pustaka" className='text-white hover:opacity-60'>Pustaka</a>
            </div>
        </div>
    </nav>
    </>
  )
}

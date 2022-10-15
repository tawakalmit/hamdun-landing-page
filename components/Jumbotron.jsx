import React from 'react'
import Image from 'next/image'

export default function Jumbotron() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center md:h-[20rem] bg-[url("/asset/cover.jpg")] p-5 md:p-0'>
        <Image src="/asset/logo.png" width={230} height={230} />
        <div className='flex items-center flex-col p-3 md:ml-10 md:p-0'>
            <h1 className='font-semibold text-4xl mb-3 text-center'>Selamat Datang di HAMDUN</h1>
            <h2 className='font-semibold text-xl md:text-2xl'>Jalin Silaturahmi bersama alumni</h2>
        </div>
    </div>
  )
}

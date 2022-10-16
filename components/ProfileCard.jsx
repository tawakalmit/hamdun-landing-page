import React from 'react'
import Image from 'next/image'

export default function ProfileCard({image, description}) {
  return (
    <div className="w-96 m-5 bg-[#ecf0f1] p-5 rounded-xl shadow-md">
        <Image src={image} height={300} width={400} className="rounded-xl" alt='profile'/>
        <p className="text-lg mt-5">{description}</p>
    </div>
  )
}

import React from 'react'

export default function JadwalCard() {
  return (
    <div className="w-11/12 h-fit rounded-xl mb-5 bg-[#25274C] p-5">
        <p className="text-white">Talim Rutin khomisan anu biasa dilaksanakan di Ponpes Mambaul Huda Pusat.</p>
        <p>Kitab-kitab na :</p>
        <ul className="ml-4 list-disc text-white">
            <li>Tafsir Jalalen</li>
            <li>Bukhori</li>
            <li>Tuhfatuth Tholab</li>
        </ul>
        <p className="font-bold text-white mt-5">Tempat : Madrosah Mambaul Huda Babakan Cikalong</p>
        <p className="text-white mt-5">Mugi urang sadaya diparin sehat wal Afiat & diparin taufiq, tiasa hadir dina waktosna.</p>
        <div className="w-full flex justify-end mt-5"><p className="text-white text-sm opacity-40">16/10/2022</p></div>
    </div>
  )
}

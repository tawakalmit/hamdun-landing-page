import React from 'react'
import Layout from '../components/Layout'
import JadwalCard from '../components/JadwalCard'

export default function jadwal() {
  return (
    <Layout 
    content={
        <>
        <h1 className="mt-24 font-bold text-3xl text-center">Jadwal</h1>
        <div className="mt-10 w-11/12 mx-auto flex flex-col md:flex-row justify-around items-center">
            <JadwalCard />
        </div>
        </>
    }
    />  
  )
}

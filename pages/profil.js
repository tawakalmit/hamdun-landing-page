import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function profil() {
  return (
        <Layout
        content={
            <div className='w-full mt-20'>
                <div className='w-10/12 mx-auto flex-col flex md:flex-row items-center justify-center'>
                    <Image src="/asset/logo.png" width={230} height={230} />
                    <div className='w-full mt-10 md:mt-0 md:w-[40rem] ml-0 md:ml-20'>
                        <ul className='list-disc'>
                        <li className='mb-5 md:mb-0'>Para alumni pondok pesantren memiliki peran penting dalam menjaga eksistensi pondok pesantren yg menjadi almamaternya.</li>
                        <li className='mb-5 md:mb-0'>Solidaritas para alumni yg terbangun secara apik akan memperkuat posisi tawar para alumni di tengah tengah masyarakat .</li>
                        <li className='mb-5 md:mb-0'>Keberkahan yang di dapat oleh para alumni juga tidak bisa di lepaskan dari kepedulian para alumni kepada almameter nya.</li>
                        </ul>
                    </div>
                </div>
            </div>
        }
        />
  )
}

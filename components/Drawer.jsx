import { FiMenu } from "react-icons/fi"

export default function Drawer() {
  return (
    <>
    <div className="fixed top-0 drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer-4" className="absolute top-[1rem] right-[2rem] text-white"><FiMenu size={30} color="white" /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content flex flex-col justify-around    ">
        <p onClick={(e) => router.push('/') } className='text-2xl p-5 active:bg-[#1abc9c]'>Beranda</p>
        <p onClick={(e) => router.push('/jadwal') } className='text-2xl p-5 active:bg-[#1abc9c]'>Jadwal</p>
        <p onClick={(e) => router.push('/artikel') } className='text-2xl p-5 active:bg-[#1abc9c]'>Artikel</p>
        <p onClick={(e) => router.push('/berita') } className='text-2xl p-5 active:bg-[#1abc9c]'>Berita</p>
        <p onClick={(e) => router.push('/gallery') } className='text-2xl p-5 active:bg-[#1abc9c]'>Gallery</p>
        <p onClick={(e) => router.push('/pustaka') } className='text-2xl p-5 active:bg-[#1abc9c]'>Pustaka</p>
    </div>
  </div>
</div>
</>
  )
}

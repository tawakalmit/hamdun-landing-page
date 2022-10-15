import Carousel from "../components/Carousel"
import Layout from "../components/Layout"

export default function Gallery() {
  return (
    <>
    <Layout 
    content={
        <div className="w-10/12 mx-auto mt-10">

        <h1 className="text-3xl font-bold text-center md:text-left">Gallery</h1>
        <Carousel />

        </div>
    }
    
    />
    </>
  )
}

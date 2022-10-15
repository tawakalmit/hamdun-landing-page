import Navbar from "../components/Navbar"
import HamdunHead from "../components/HamdunHead"
import Jumbotron from "../components/Jumbotron"
import Drawer from "../components/Drawer"

import Image from "next/image"

export default function Home() {
  return (
    <>
    <HamdunHead title="Home" />
    <Navbar />
    <Jumbotron />
    <Drawer />
    
    </>
  )
}

import Navbar from "./Navbar"
import Drawer from "./Drawer"

export default function Layout({content}) {
  return (
    <>
    <Navbar />
    <div>
        {content}
    </div>
    <Drawer />

    </>
  )
}

import Navbar from "./Navbar"

export default function Layout({content}) {
  return (
    <>
    <Navbar />
    <div>
        {content}
    </div>
    </>
  )
}

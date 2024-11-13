import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import SideBar2 from "./components/SideBar2"

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <SideBar/>
        <SideBar2/>
    </>
  )
}

export default Layout
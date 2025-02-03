import { Outlet } from "react-router-dom"
import { FunctionComponent } from "react";
import Footer from "../footer/Footer";
import "./body.css"
import Sidebar from "../sidebar/Sidebar";

const Layout:FunctionComponent = () => {
  return (
  <main>
    <Sidebar/>
    <Outlet />
    <Footer/>
  </main>
  )
}

export default Layout;
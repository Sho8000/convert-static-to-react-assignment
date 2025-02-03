import Logo from "../../assets/logo.png"
import Banner01 from "../../assets/banner01_desk.png"
import Banner02 from "../../assets/banner02_desk.png"
import Banner03 from "../../assets/banner03_desk.png"
import Banner04 from "../../assets/banner04_desk.png"
import "./Header.css"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const [pic,setPic] = useState(Banner01);
  const counter = useRef(0)
  const picContainer = [Banner01,Banner02,Banner03,Banner04]


  useEffect(()=>{
    const selectPic = setTimeout(()=>{
      counter.current++
      if(counter.current > 3){
        counter.current = 0
        setPic(picContainer[counter.current])
      } else{
        setPic(picContainer[counter.current])
      }
    },4000)
    return () => clearTimeout(selectPic);
  },[pic])
  return (
    <section className="header">
      <div className="logo">
        <img src={Logo} alt="alt-logo-text" />
      </div>
        
      <div className="shifting-backgrounds">
        <img className="slideShow imgAnimation" src={pic} alt="alt shifting-background img1"/>
      </div>
    </section>
  )
}

export default Header
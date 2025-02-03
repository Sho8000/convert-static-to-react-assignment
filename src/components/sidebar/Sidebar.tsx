import { useRef } from "react"
import Logo from "../../assets/logo.png"
import "./Sidebar.css"

const Sidebar = () => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  const nabBtnHandler = () => {
    navBarRef.current?.classList.remove("visibility-hidden")    
  }

  const nabCloseHandler = () => {
    navBarRef.current?.classList.add("visibility-hidden")    
  }

  return (
    <section>
      <button className="nabBtn" onClick={()=>{nabBtnHandler()}}></button>
      <div ref={navBarRef} className="sidebar visibility-hidden" id="sidebar" >
        <div ref={closeRef} className="cross-button" id="cross-button" onClick={()=>{nabCloseHandler()}}>
          <div className="cross-line-1"></div>
          <div className="cross-line-2"></div>
        </div>

        <div className="navigation-container">
          <div className="sidebar-logo">
              <img src={Logo}/>
          </div>

          <div className="navigation-text">
              <h4 onClick={()=>{nabCloseHandler()}}>
                <a href="#reverberate">迴響  Reverberate</a>
              </h4>
              <h4 onClick={()=>{nabCloseHandler()}}>
                <a href="#painSection">作品集  Works</a>
              </h4>
              <h4 onClick={()=>{nabCloseHandler()}}>
                <a href="#painSection">創作理念  Painting Aesthetics</a>
              </h4>
              <h4 onClick={()=>{nabCloseHandler()}}>
                <a href="#about">關於  About</a>
              </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
import React, { Component } from "react"
import "./Main.css"
import logo from "./img/FULL_LOGO.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main (props){
  return (
    <div>
      <img id='main_background' src={logo} alt="Feragon Coding"/>
      <div id="social_media">
        <a href="https://www.linkedin.com/in/feragon" target="_blank" rel="noopener noreferrer" className="fa"><FontAwesomeIcon icon={['fab','linkedin-in']}/></a>
        <a href="https://www.youtube.com/channel/UCvbgjvWT19fHzM35ocvYZwg" target="_blank" rel="noopener noreferrer" className="fa"><FontAwesomeIcon icon={['fab','youtube']}/></a>
        <a href="https://www.instagram.com/feragoncoding/" target="_blank" rel="noopener noreferrer" className="fa"><FontAwesomeIcon icon={['fab','instagram']}/></a>
        <a href="https://www.udemy.com/course/domina-sas-programming-ya/" target="_blank" rel="noopener noreferrer" className="fa"><FontAwesomeIcon icon={['fas','graduation-cap']}/></a>
      </div>

      <button type="button" id='dead_line_btn' className='btn' onClick={()=>props.clickPageBtn(1)}><b>DEAD</b>LINE</button>
    </div>
  )
}


export default Main
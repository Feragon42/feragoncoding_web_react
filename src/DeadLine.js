import React, { Component } from "react"
import "./DeadLine.css"
import Badges from './Badges';
import roundLogo from "./img/ROUND_LOGO.png"

function DeadLine (props){
  return (
    <div id='deadLine'>
      <div id='deadLine-header' className='page-header'>
        <img id='deadline-logo' src={roundLogo} alt="Feragon Coding" onClick={()=>props.clickPageBtn(0)} />
      </div>
      <div id='deadLine-body'>
        <div id='deadLine-badges' className='container'>
          <Badges />  
        </div>
      </div>
    </div>
  )
}


export default DeadLine
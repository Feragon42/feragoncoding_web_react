import React, { Component } from "react"
import Countdown from 'react-countdown'
import "./DeadLine.css"
import Badges from './Badges';
import roundLogo from "./img/ROUND_LOGO.png"

function DeadLine (props){
  const deadlineDate = new Date('2024-08-23T23:59:59')

  const dlRenderer = props => {
    return (
      <h2><small id='count-letter'>DD</small> {props.formatted.days} 
          <small id='count-letter'> HH</small> {props.formatted.hours} 
          <small id='count-letter'> MM</small> {props.formatted.minutes} 
          <small id='count-letter'> SS</small> {props.formatted.seconds}</h2>
    )
  }

  return (
    <div id='deadLine'>
      <div id='deadLine-header' className='page-header'>
        <img id='deadline-logo' src={roundLogo} alt="Feragon Coding" onClick={()=>props.clickPageBtn(0)} />
        <div id='deadLine-count'>
          <Countdown date={deadlineDate} renderer={dlRenderer} zeroPadTime={2}/>
        </div>
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
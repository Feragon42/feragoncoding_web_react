import React, { Component } from "react"
import "./Badges.css"

function Badges(){
  return(
    <div>
      <BadgesHeader />
      <BadgesList badgesList={badgesList} />
    </div>
  )
}

function BadgesHeader(){
  return(
    <div id='badge-header'>
      <img id='badge-platinum' src={process.env.PUBLIC_URL+'/badges/badge_locked_0.png'} />
    </div>
  )
}

function BadgesList(props){
  const lista = (
      <div className='row'>
        {props.badgesList.map(
          (b) => <div id='badge-col' className='col-2'><img id='badge-img' src={process.env.PUBLIC_URL+b.lockSrc} alt={b.name} /></div>
        )}
      </div>
    )

  return(
    <div className='container'>
      {lista}
    </div>
  )
}

const badgesList = [
  {desc: 'Subir primer video a Youtube', category: 'Bronce', name:'YouTube n00b', lockSrc: '/badges/badge_locked_1.png', unlockSrc:'/badges/badge_1.png', inLocked:0},
  {desc: 'Subir 15avo video a Youtube', category: 'Bronce', name:'YouTube try', lockSrc: '/badges/badge_locked_2.png', unlockSrc:'/badges/badge_2.png', inLocked:0},
  {desc: 'Subir 50 videos a Youtube ', category: 'Plata', name:'Youtube R', lockSrc: '/badges/badge_locked_3.png', unlockSrc:'/badges/badge_3.png', inLocked:0},
  {desc: 'Obtener 1000 seguidores', category: 'Plata', name:'Influencer', lockSrc: '/badges/badge_locked_4.png', unlockSrc:'/badges/badge_4.png', inLocked:0},
  {desc: 'Pagarle el TV a Jose', category: 'Bronce', name:'Siempre paga', lockSrc: '/badges/badge_locked_5.png', unlockSrc:'/badges/badge_5.png', inLocked:0},
  {desc: 'Ganar $1000 en Udemy', category: 'Plata', name:'Meta de curso', lockSrc: '/badges/badge_locked_6.png', unlockSrc:'/badges/badge_6.png', inLocked:0},
  {desc: 'Ganar $5000 en Udemy', category: 'Oro', name:'Nunca imagine llegar a esto', lockSrc: '/badges/badge_locked_7.png', unlockSrc:'/badges/badge_7.png', inLocked:0},
  {desc: 'Completar curso SAS Programming', category: 'Bronce', name:'El primero es el mas dificil', lockSrc: '/badges/badge_locked_8.png', unlockSrc:'/badges/badge_8.png', inLocked:0},
  {desc: 'Completar curso PL/SQL', category: 'Plata', name:'Cambiando de tema', lockSrc: '/badges/badge_locked_9.png', unlockSrc:'/badges/badge_9.png', inLocked:0},
  {desc: 'Completar curso Certificate SAS Base', category: 'Plata', name:'Ayudaita en la certificacion', lockSrc: '/badges/badge_locked_10.png', unlockSrc:'/badges/badge_10.png', inLocked:0},
  {desc: 'Obtener Aleman A1', category: 'Bronce', name:'Hallo!', lockSrc: '/badges/badge_locked_11.png', unlockSrc:'/badges/badge_11.png', inLocked:0},
  {desc: 'Obtener Aleman A2', category: 'Bronce', name:'Nicht so Anfanger', lockSrc: '/badges/badge_locked_12.png', unlockSrc:'/badges/badge_12.png', inLocked:0},
  {desc: 'Obtener Aleman B1', category: 'Plata', name:'Ich spreche Deutsch', lockSrc: '/badges/badge_locked_13.png', unlockSrc:'/badges/badge_13.png', inLocked:0},
  {desc: 'Obtener Aleman B2', category: 'Oro', name:'Entschuldigung!', lockSrc: '/badges/badge_locked_14.png', unlockSrc:'/badges/badge_14.png', inLocked:0},
  {desc: 'Bajar de los 100kg', category: 'Plata', name:'En dos cifras', lockSrc: '/badges/badge_locked_15.png', unlockSrc:'/badges/badge_15.png', inLocked:0},
  {desc: 'Bajar de los 85kg', category: 'Oro', name:'Lo mas fitness que puedes ser', lockSrc: '/badges/badge_locked_16.png', unlockSrc:'/badges/badge_16.png', inLocked:0},
  {desc: 'Obtener Ingles C1', category: 'Oro', name:'Finally', lockSrc: '/badges/badge_locked_17.png', unlockSrc:'/badges/badge_17.png', inLocked:0},
  {desc: 'Viajar a Alemania', category: 'Oro', name:'Lejos de la patria', lockSrc: '/badges/badge_locked_18.png', unlockSrc:'/badges/badge_18.png', inLocked:0},
  {desc: 'Ahorrar $1000 de mi sueldo', category: 'Bronce', name:'Como debería ser', lockSrc: '/badges/badge_locked_19.png', unlockSrc:'/badges/badge_19.png', inLocked:0},
  {desc: 'Ahorrar $5000 de mi sueldo', category: 'Plata', name:'A mitad de camino', lockSrc: '/badges/badge_locked_20.png', unlockSrc:'/badges/badge_20.png', inLocked:0},
  {desc: 'Ahorrar $10000 de mi sueldo', category: 'Oro', name:'Compremosnos un yate', lockSrc: '/badges/badge_locked_21.png', unlockSrc:'/badges/badge_21.png', inLocked:0}
]



export default Badges


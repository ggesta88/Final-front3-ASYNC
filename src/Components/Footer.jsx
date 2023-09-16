import React from 'react'
import dh from '../images/DH.png'
import facebook from '../images/ico-facebook.png'
import instagram from '../images/ico-instagram.png'
import tiktok from '../images/ico-tiktok.png'
import whatsapp from '../images/ico-whatsapp.png'
import { useDentistStates } from '../Context/Context'

const Footer = () => {

  const {state} = useDentistStates()

  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src={dh} alt='DH-logo' />
        <img style={{width:20, margin:0, padding:10 }} src={facebook} alt='facebook-icono' />
        <img style={{width:20, margin:0, padding:10 }} src={instagram} alt='instagram-icono' />
        <img style={{width:20, margin:0, padding:10 }} src={tiktok} alt='tiktok-icono' />
        <img style={{width:20, margin:0, padding:10 }} src={whatsapp} alt='whatsapp-icono' />
    </footer>
  )
}

export default Footer
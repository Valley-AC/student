import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Soft from '../../components/trainings/Soft'

export default function Trainings() {
  
  return (
    <div>
      {
        window.location.pathname == '/soft' && <Soft/>
      }
      <Footer/>
    </div>
  )
}

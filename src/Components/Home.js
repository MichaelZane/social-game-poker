import React from 'react'
import Image from 'react-bootstrap/Image'
import bkgrd from '../assets/bkgrd-poker.png'
import Featured from './Featured'


const Home = () => {


  return (
    <>
      <Image className="bkgrd-img position-absolute" src={bkgrd} alt="poker dealer"/>
      <Featured />
         
    </>
  )
}

export default Home

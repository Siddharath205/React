import React from 'react'
import Header from './Component/Headers'
import { Outlet } from 'react-router-dom'
import Footer from './Component/footer'

function Applayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout
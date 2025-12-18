import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Headers'
import Home from './Component/home'
import About from './Component/About'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])


  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
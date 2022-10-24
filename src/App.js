import "./Tailwind.css"
import React from 'react'
import { Route, Routes } from "react-router-dom"

import ROUTES from "./constants/routes"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home"
import Services from "./pages/Services"

function PodologiaJireh() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
      </Routes>
      < Footer />
    </div>
  )
}

export default PodologiaJireh

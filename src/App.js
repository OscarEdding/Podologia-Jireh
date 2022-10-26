import "./Tailwind.css"
import React from 'react'
import { Route, Routes } from "react-router-dom"

import ROUTES from "./constants/routes"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import WhatsAppFloating from "./components/WhatsApp Button/WhatsAppFloating"

function PodologiaJireh() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
      </Routes>
      <WhatsAppFloating />
      < Footer />
    </div>
  )
}

export default PodologiaJireh

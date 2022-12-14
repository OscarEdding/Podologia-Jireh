import "./Tailwind.css"
import React from "react"

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Prices from "./pages/Prices"
import Footer from "./components/Footer/Footer"
import WhatsAppFloating from "./components/WhatsApp Button/WhatsAppFloating"
import Schedules from "./pages/Schedules"

function PodologiaJireh() {

  return (
    <div>
      <Navbar />
      <div>
        <div id="home" />
        <Home />

        <div id="services" />
        <Services />

        <div id="prices" />
        <Prices />
      </div>
      <WhatsAppFloating />
      <Schedules />
      < Footer />
    </div>
  )
}

export default PodologiaJireh

import "./Tailwind.css"
import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Section from "./components/Section/Section"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Footer from './components/Footer/Footer'
import WhatsAppFloating from "./components/WhatsApp Button/WhatsAppFloating"

function PodologiaJireh() {
  return (
    <div>
      <Navbar />
      <div>
      <Section
        dark={true}
        id="home"
      />
      <Home />

      <Section
        dark={true}
        id="services"
      />
      <Services />

      <Section
        dark={true}
        id="gallery"
      />
      <Gallery />
      </div>
      <WhatsAppFloating />
      < Footer />
    </div>
  )
}

export default PodologiaJireh

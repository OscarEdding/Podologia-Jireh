import "./Tailwind.css"
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"

function PodologiaJireh() {
  return (
    <div className="">
      <Navbar />
      <Home />
      < Footer />
    </div>
  )
}

export default PodologiaJireh

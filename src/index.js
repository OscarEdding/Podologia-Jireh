import React from 'react'
import { createRoot } from 'react-dom/client'
import PodologiaJireh from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'tw-elements'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <PodologiaJireh />
    </Router>
  </React.StrictMode>
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import PodologiaJireh from './App'
import 'tw-elements'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <PodologiaJireh />
  </React.StrictMode>
)

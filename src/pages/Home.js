import React from "react"

import Carousel from "../components/Carousel/Carousel"

function Home() {

  return (
    <div>
      <Carousel />
      <div className="w-2/3">
        <span className="font-black text-green-500 text-3xl">¡Dale vida y sanidad a tus pies!</span>
        <br />
        <span className="font-black text-green-500 text-3xl">La podología realizada por un podologo es la ciencia sanitaria que tiene por objeto el estudio de las enfermedades y alteraciones que afectan al pie.</span>
      </div>
    </div>
  )
}

export default Home

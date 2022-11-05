import React from "react"

import Carousel from "../components/Carousel/Carousel"

function Home() {

  return (
    <div>
      <Carousel />
      <div className="w-full h-full  bg-fixed bg-cover bg-[url('https://podologia-jireh.s3.sa-east-1.amazonaws.com/bg-podology.jpg')]">
        
        <div className="flex flex-col bg-gray-50/50 py-5 items-start">
          <div className="flex flex-col px-5 md:w-2/4  transform transition-transform translate-x-5">
            <p className="font-extrabold text-3xl text-white">¿Que es la podología clínica?</p>
            <hr className="w-40 md:w-60 h-1 bg-sky-600 my-2 rounded-full" />
            <p className="font-semibold text-lg">Podología clínica es la ciencia que abarca el diagnóstico y tratamiento de las afecciones de los pies mediante diversas técnicas.</p>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50/50 py-5 items-end">
          <div className="flex flex-col px-5 md:w-2/4 md:justify-items-end">
            <p className="font-extrabold text-3xl text-white">¿Para que nos sirve?</p>
            <hr className="w-40 md:w-60 h-1 bg-sky-600 my-2 rounded-full" />
            <ul className="list-disc font-semibold text-lg px-5">
              <li>Identificar y tratar dificultades y limitaciones que presenten nuestros pies.</li>
              <li>Prevenir enfermedades de los pies.</li>
              <li>Mantener e incrementar la salud y bienesyar de nuestros pies, dando un mejor caminar día a día.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import React from "react"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"
import { FaHandshake, FaHandPaper, FaSmile } from "react-icons/fa"

import Carousel from "../components/Carousel/Carousel"

function Home() {

  const customAnimationFadeLeft = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-40px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `

  const customAnimationFadeRight = keyframes`
    from {
      opacity: 0;
      transform: translate3d(40px, 0, 0);;
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `

  return (
    <div>
      <Carousel />
      <div className="w-full md:w-full h-full grid grid-flow-row md:grid-cols-2 lg:md:grid-cols-3 px-10 py-10 gap-5 text-lg font-medium">
        <div className="flex items-center gap-5 border-2 rounded-3xl p-5 shadow-xl">
          <FaHandshake className="w-1/4 max-w-[20%] h-full" />
          <span className="w-3/4">Certificados y reconocidos por el Ministerio de Salud de Chile</span>
        </div>
        <div className="flex items-center gap-5 border-2 rounded-3xl p-5 shadow-xl">
          <FaHandPaper className="w-1/4 max-w-[20%] h-full" />
          <span className="w-3/4">Mantenemos un estándar de calidad utilizando siempre material quirúrgico esterilizado y materiales desechables</span>
        </div>
        <div className="flex items-center gap-5 border-2 rounded-3xl p-5 shadow-xl">
          <FaSmile className="w-1/4 max-w-[20%] h-full" />
          <span className="w-3/4">Promoción continua a estilos de vida saludable y logrando la recuperación total de las afecciones del pie.</span>
        </div>
      </div>
      <div className="w-full h-full  bg-fixed bg-cover bg-[url('https://podologia-jireh.s3.sa-east-1.amazonaws.com/bg-podology.jpg')]">
        <div className="py-10 px-10 bg-gray-50/50">
          <Reveal keyframes={customAnimationFadeLeft}>
            <div className="flex flex-col py-5 items-start">
              <div className="flex flex-col md:w-2/4">
                <p className="font-extrabold text-3xl text-white">¿Que es la podología clínica?</p>
                <hr className="w-40 md:w-60 h-1 bg-sky-600 my-2 rounded-full" />
                <p className="font-semibold text-lg">Podología clínica es la ciencia que abarca el diagnóstico y tratamiento de las afecciones de los pie mediante diversas técnicas.</p>
              </div>
            </div>
          </Reveal>

          <Reveal keyframes={customAnimationFadeRight}>
            <div className="flex flex-col py-5 items-end">
              <div className="flex flex-col md:w-2/4 md:justify-items-end">
                <p className="font-extrabold text-3xl text-white">¿Para que nos sirve?</p>
                <hr className="w-40 md:w-60 h-1 bg-sky-600 my-2 rounded-full" />
                <ul className="list-disc font-semibold text-lg px-5">
                  <li>Identificar y tratar dificultades y limitaciones que presenten nuestros pies.</li>
                  <li>Prevenir enfermedades de los pies.</li>
                  <li>Mantener e incrementar la salud y bienesyar de nuestros pies, dando un mejor caminar día a día.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Home

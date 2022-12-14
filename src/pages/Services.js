import React from "react"
import { Reveal } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

function Services() {

  const services = [
    "Podología clínica infantil",
    "Podología clínica adulto",
    "Podología clínica adulto mayor",
    "Podología clínica para pie diabético"
  ]

  const otherServices = [
    "Bracket (Corrección de uña)",
    "Reconstrucción ungueal",
    "Depilación con cera de abeja"
  ]

  const customAnimationFadeLeft = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-50px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `

  const customAnimationFadeRight = keyframes`
    from {
      opacity: 0;
      transform: translate3d(50px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around my-12 md:my-20 gap-10 md:gap-0">
      <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 w-4/5 md:w-2/5">
        <Reveal keyframes={customAnimationFadeLeft}>
          <h2 className="font-semibold text-3xl mb-5">Servicios principales</h2>
          <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            {services.map((service, indexService) => (
              <li key={indexService} className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 w-4/5 md:w-2/5">
        <Reveal keyframes={customAnimationFadeRight}>
          <h2 className="font-semibold text-3xl mb-5">Otros servicios</h2>
          <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            {otherServices.map((otherService, indexOtherService) => (
              <li key={indexOtherService} className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                {otherService === "Depilación" ?
                  <span>
                    {otherService}
                    &nbsp;➤&nbsp;
                    <a
                      href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." 
                      className="hover:underline text-blue-800 cursor-pointer">
                        Agenda tu hora
                    </a>
                  </span>
                  :
                <span>{otherService}</span>
                }
              </li>
            ))}
          </ul>
          
          <hr className="my-6 border-gray-300" />
          <p>
            Para mayor información contáctenos presionando el botón de abajo
          </p>
          <a
            href="https://wa.me/56936354209?text=Hola,%20quisiera%20más%20información."
            className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Más información
          </a>
        </Reveal>
      </div>
    </div>
  )
}

export default Services

import React from "react"
import { Zoom } from "react-awesome-reveal"

function Prices() {

  const services = [
    {
      title: "Podología integrada completa",
      subtitle: "Juvenil - Adulto - Adulto mayor",
      price: "$14.000",
      secondaryPrice: "",
      addedService: "",
      services: [
        "Asepcia inicial (Limpieza inicial del pie)",
        "Limpieza de surcos (Bordes)",
        "Onicotomía (Corte de uñas)",
        "Eliminación de queratosis (Durezas)",
        "Pulido dérmico",
        "Hidratación",
        "Educación sanitaria"
      ],
      secondaryService: "",
      url: "https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora%20para%20plan%20Podología%20integrada%20completa.",
    },
    {
      title: "Uñas encarnadas (Onicocriptósis)",
      subtitle: "Servicio solicitado por encarnaciones de uñas",
      price: "$25.000",
      secondaryPrice: "$5.000",
      addedService: "+ 1ra curación",
      services: [
        "Espiculotomía (Retiro de uña encarnada)"
      ],
      secondaryService: "Post primera curación por uña encarnada",
      url: "https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora%20para%20plan%20Uña%20encarnada."
    }, {
      title: "Podología clínica niños",
      subtitle: "",
      price: "$12.000",
      secondaryPrice: "",
      addedService: "",
      services: [],
      secondaryService: "",
      url: "https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora%20para%20plan%20Podología%20integrada%20completa.",
    }, {
      title: "Onicomicósis (Hongo en uñas)",
      subtitle: "Valor según estado de la lámina (Uña)",
      price: "",
      secondaryPrice: "",
      addedService: "",
      services: [],
      secondaryService: "",
      url: "https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora%20para%20plan%20Onicomicosis.",
    }
  ]

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
          <Zoom>
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Los precios varian según el tipo de servicio solicitado</h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Los servicios entregados son realizados por profesionales especialistas en el área con estudios completados y con título profesional.</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="flex flex-col md:grid md:grid-flow-col-dense md:grid-rows-2 items-center md:items-start md:justify-around gap-10 md:gap-6">
              {services.map((service, indexService) => (
                <div key={indexService} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{service.subtitle}</p>
                  {service.price !== "" &&
                    <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">{service.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">{service.addedService}</span>
                    </div>
                  }
                  
                  <ul className="mb-8 space-y-4 text-left">
                    {service.services.map((office, indexOffice) => (
                      <li key={indexOffice} className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>{office}</span>
                      </li>
                    ))}
                  </ul>

                  {service.secondaryPrice !== "" &&
                    <div>
                      <hr className="h-1 bg-gray-500 rounded-md" />
                      <br />
                    </div>
                  }

                  {service.secondaryService !== "" &&
                    <ul className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="font-semibold">{service.secondaryService}</span>
                      </li>
                    </ul>
                  }

                  {service.secondaryPrice !== "" &&
                    <div className="flex justify-center items-baseline mb-8">
                      <span className="mr-2 text-5xl font-extrabold">{service.secondaryPrice}</span>
                    </div>
                  }

                  <a href={service.url} className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Solicitar hora</a>
                </div>
              ))}
            </div>
          </Zoom>
        </div>
      </section>
    </div>
  )
}

export default Prices

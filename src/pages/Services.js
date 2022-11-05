import React from "react"

function Services() {

  const services = [
    "Onicotomía (Corte de uña)",
    "Limpieza de surcos",
    "Debastado ungueal (Limpieza de uña)",
    "Retiro de hiperqueratosis (Durezas leves)",
    "Pulido dérmico",
    "Hidratación"
  ]

  const otherServices = [
    "Bracket (Corrección de uña)",
    "Reconstrucción ungueal"
  ]

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around my-20 gap-10 md:gap-0">
      <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 w-4/5 md:w-2/5">
        <h2 class="font-semibold text-3xl mb-5">Servicios</h2>
        <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
          {services.map((service) => (
            <li class="flex items-center space-x-3">
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 w-4/5 md:w-2/5">
        <h2 class="font-semibold text-3xl mb-5">Otros servicios</h2>
        <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
          {otherServices.map((service) => (
            <li class="flex items-center space-x-3">
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <hr class="my-6 border-gray-300" />
        <p>
          Para mayor información contactenos presionando el botón de abajo
        </p>
        <button
          type="button"
          class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Más información
        </button>
      </div>
    </div>
  )
}

export default Services

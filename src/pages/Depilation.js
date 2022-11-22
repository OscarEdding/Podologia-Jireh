import React from "react"

function Depilation() {

  const manBody = [
    { service: "Axilas", price: "5.000" },
    { service: "Medio brazo", price: "5.000" },
    { service: "Brazo completo", price: "10.000" },
    { service: "Manos", price: "2.000" },
    { service: "Abdomen completo", price: "15.000" },
    { service: "Espalda completa", price: "15.000" },
    { service: "Gluteos", price: "8.000" },
    { service: "Ano", price: "8.000" },
    { service: "Muslo", price: "8.000" },
    { service: "Media pierna", price: "7.000" },
    { service: "Pierna completa", price: "15.000" },
    { service: "Pies", price: "2.000" },
    { service: "Rebaje completo", price: "25.000" }
  ]

  const manFace = [
    { service: "Cejas", price: "5.000" },
    { service: "Patillas", price: "4.000" },
    { service: "Orejas", price: "2.000" },
    { service: "Nariz", price: "2.000" },
    { service: "Barba", price: "8.000" },
    { service: "Cara completa", price: "15.000" }
  ]

  const womanBody = [
    { service: "Pechos", price: "5.000" },
    { service: "Axilas", price: "3.500" },
    { service: "Medio brazo", price: "3.000" },
    { service: "Brazo completo", price: "7.000" },
    { service: "Manos", price: "1.000" },
    { service: "Abdomen", price: "5.000" },
    { service: "Abdomen bajo", price: "2.000" },
    { service: "Espalda alta", price: "5.000" },
    { service: "Espalda baja", price: "5.000" },
    { service: "Espalda completa", price: "10.000" },
    { service: "Gluteos", price: "4.000" },
    { service: "Muslo", price: "4.500" },
    { service: "Media pierna", price: "4.000" },
    { service: "Pierna completa", price: "8.000" },
    { service: "Pies", price: "1.000" }
  ]

  const womanFace = [
    { service: "Cejas", price: "4.000" },
    { service: "Patillas", price: "2.000" },
    { service: "Nariz", price: "1.000" },
    { service: "Menton (Bozo)", price: "2.000" },
    { service: "Cara completa", price: "10.000" }
  ]

  const womanPrivateParts = [
    { service: "Full rebaje", price: "14.000" },
    { service: "Barbie", price: "11.000" },
    { service: "Moicano", price: "10.000" },
    { service: "Rebaje corto", price: "5.000" },
    { service: "Ano", price: "3.000" },
    { service: "Parche", price: "1.000" }
  ]

  return (
    <div>
      <section>
        <div class="p-5 h-full bg-gray-100">
          <h1 class="text-xl mb-2 text-center">Tabla de precios para depilación</h1>

          <div class="overflow-auto rounded-lg shadow hidden md:block">
            <table class="w-full">
              <thead class="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th class="p-3 text-sm font-semibold tracking-wide text-left">Servicios</th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                  <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                </tr>
              </thead>
              <div class="bg-gray-50 border-b-2 p-1 rounded-md border-gray-200">
                <span
                  class="p-1.5 ml-10 text-sm font-medium uppercase tracking-wider text-cyan-800 bg-cyan-400 rounded-lg bg-opacity-50"><b>Hombre: </b>Cuerpo
                </span>
                <span></span>
              </div>
              <tbody class="divide-y divide-gray-100">
                <tr class="bg-white">
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Kring New Fit office chair, mesh + PU, black
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm justify-center">
                <div>
                  <span
                    class="p-1.5 text-base font-medium uppercase tracking-wider text-cyan-800 bg-cyan-400 rounded-lg bg-opacity-50"><b>Hombre: </b>Cuerpo
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                {manBody.map((serv) => (
                  <tr className="flex justify-center">
                    <th class="w-3/5 p-3 text-sm font-semibold tracking-wide text-left border-r-2">{serv.service}</th>
                    <th class="w-2/5 flex pl-10 p-3 text-sm font-semibold tracking-wide">$ {serv.price}</th>
                  </tr>
                ))}
              </div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm justify-center">
                <div>
                  <span
                    class="p-1.5 text-base font-medium uppercase tracking-wider text-cyan-800 bg-cyan-400 rounded-lg bg-opacity-50"><b>Hombre: </b>Cara</span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                {manFace.map((serv) => (
                  <tr className="flex justify-center">
                    <th class="w-3/5 p-3 text-sm font-semibold tracking-wide text-left border-r-2">{serv.service}</th>
                    <th class="w-2/5 flex pl-10 p-3 text-sm font-semibold tracking-wide">$ {serv.price}</th>
                  </tr>
                ))}
              </div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm justify-center">
                <div>
                  <span
                    class="p-1.5 text-base font-medium uppercase tracking-wider text-pink-800 bg-pink-500 rounded-lg bg-opacity-50"><b>Mujer: </b>Cuerpo
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                {womanBody.map((serv) => (
                  <tr className="flex justify-center">
                    <th class="w-3/5 p-3 text-sm font-semibold tracking-wide text-left border-r-2">{serv.service}</th>
                    <th class="w-2/5 flex pl-10 p-3 text-sm font-semibold tracking-wide">$ {serv.price}</th>
                  </tr>
                ))}
              </div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm justify-center">
                <div>
                  <span
                    class="p-1.5 text-base font-medium uppercase tracking-wider text-pink-800 bg-pink-500 rounded-lg bg-opacity-50"><b>Mujer: </b>Cara
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                {womanFace.map((serv) => (
                  <tr className="flex justify-center">
                    <th class="w-3/5 p-3 text-sm font-semibold tracking-wide text-left border-r-2">{serv.service}</th>
                    <th class="w-2/5 flex pl-10 p-3 text-sm font-semibold tracking-wide">$ {serv.price}</th>
                  </tr>
                ))}
              </div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm justify-center">
                <div>
                  <span
                    class="p-1.5 text-base font-medium uppercase tracking-wider text-pink-800 bg-pink-500 rounded-lg bg-opacity-50"><b>Mujer: </b>Zona íntima
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                {womanPrivateParts.map((serv) => (
                  <tr className="flex justify-center">
                    <th class="w-3/5 p-3 text-sm font-semibold tracking-wide text-left border-r-2">{serv.service}</th>
                    <th class="w-2/5 flex pl-10 p-3 text-sm font-semibold tracking-wide">$ {serv.price}</th>
                  </tr>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Depilation

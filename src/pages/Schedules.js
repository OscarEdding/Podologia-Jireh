import React from "react"
import { JackInTheBox } from "react-awesome-reveal"

function Schedules() {

  return (
    <JackInTheBox>
      <div className="w-full font-semibold font-sans py-20">
        <div className="flex justify-center text-2xl pb-10 md:pb-20">
          HORARIO DE ATENCIÓN
        </div>
        <div className="flex flex-row justify-evenly text-center">
          <div>
            <p className="text-xl pb-2">LUNES A VIERNES</p>
            <p className="text-lg">Desde 10:00 hrs.<br />Hasta 18:30 hrs.</p>
          </div>
          <div>
            <p className="text-xl pb-2">SÁBADOS</p>
            <p className="text-lg">Desde 10:00 hrs.<br />Hasta 16:00 hrs.</p>
          </div>
        </div>
      </div>
    </JackInTheBox>
  )
}

export default Schedules

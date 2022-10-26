import React from "react"

function WhatsAppFloating() {

  return (
    <div className="hidden md:block">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <a href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." className="fixed bottom-11 right-28 opacity-70 bg-slate-600 px-2 py-1 text-xs">
        <a href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." className="">¿Necesita ayuda?</a>
        <br />
        <a href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." className="font-bold">Escríbenos a WhatsApp</a>
      </a>
      <div className="w-4  overflow-hidden fixed bottom-3 right-24 opacity-70">
        <div className=" h-16  bg-slate-600 rotate-45 transform origin-top-left"></div>
      </div>
      <a href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." className="fixed w-14 h-14 bottom-10 right-10 bg-[#25d366] rounded-full text-center text-3xl z-50 shadow-[2px_2px_3px_3px_rgba(0,0,0,0.2)]">
          <i className="fa fa-whatsapp mt-[13px]"></i>
        </a>
    </div>
  )
}

export default WhatsAppFloating
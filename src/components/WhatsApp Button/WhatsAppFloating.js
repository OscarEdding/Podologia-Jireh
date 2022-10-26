import React from "react"

function WhatsAppFloating() {

  return (
    <div className="hidden md:block">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <a href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." className="fixed w-14 h-14 bottom-10 right-10 bg-[#25d366] rounded-full text-center text-3xl z-50 shadow-[2px_2px_3px_3px_rgba(0,0,0,0.2)]">
          <i className="fa fa-whatsapp mt-[13px]"></i>
        </a>
    </div>
  )
}

export default WhatsAppFloating
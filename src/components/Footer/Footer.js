import { React } from "react"

import { Link } from "react-scroll"

const Footer = () => {

  const sections = [
    {
      to: "home",
      service: "Inicio"
    },
    {
      to: "services",
      service: "Servicios"
    },
    {
      to: "prices",
      service: "Precios"
    }
  ]

  return (
    <div>
      <footer className="p-4 bg-white sm:p-6 bg-gradient-to-r from-cyan-900 to-cyan-500">
        <div className=" lg:justify-between md:px-36">
          <div className="mb-6">
            <a href="https://www.instagram.com/podologiaclinicajirehestado/" className="flex items-center">
              <img src="https://podologia-jireh.s3.sa-east-1.amazonaws.com/logo.png" className="mr-3 h-8" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Podología JIREH</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">JIREH</h2>
              <ul className="text-gray-300">
                {sections.map((section, indexSection) => (
                  <li key={indexSection} className="mb-4">
                    <Link
                      activeClass="active"
                      to={section.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="hover:underline cursor-pointer">
                      {section.service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Siguenos en</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="https://www.instagram.com/podologiaclinicajirehestado/" className="hover:underline ">Instagram</a>
                </li>
                <li>
                  <a href="/#" className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Agendar aquí</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="https://wa.me/56936354209?text=Hola,%20quisiera%20agendar%20una%20hora." className="hover:underline">+56 9 3635 4209</a>
                </li>
                <li className="mb-4">
                  <a href="https://goo.gl/maps/ZaZGFkr91RBYwSveA" className="hover:underline">Estado 25, Santiago Centro</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Otros servicios</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="https://wa.me/56979203657?text=Hola,%20quisiera%20agendar%20una%20hora%20para%20Depilación." className="hover:underline">Delipación</a>
                </li>
                <li className="mb-4">
                  <a href="https://wa.me/56962929438?text=Hola,%20quisiera%20agendar%20una%20hora%20para%20Medicina%20China." className="hover:underline">Medicina China</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8 md:mx-20" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-300 sm:text-center mr-5">© 2022 <a href="https://www.instagram.com/podologiaclinicjireh/" className="hover:underline">Podología JIREH™</a>. Todos los derechos reservados.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="/#" className="text-gray-300 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-darkreader-inline-fill=""><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/podologiaclinicjireh/" className="text-gray-300 hover:text-pink-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-darkreader-inline-fill="" ><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

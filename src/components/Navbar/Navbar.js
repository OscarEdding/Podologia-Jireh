import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { Link, animateScroll as scroll } from "react-scroll"

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
    },
    {
      to: "gallery",
      service: "Galería"
    }
  ]

  return (
    <div className="fixed z-10 w-full shadow-[0_4px_14px_0_rgba(0,0,0,0.4)]">
      <nav className="bg-gradient-to-r from-cyan-900 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src="https://podologia-jireh.s3.sa-east-1.amazonaws.com/logo.png"
                  alt="JIREH"
                  onClick={scrollToTop}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-20 flex items-baseline space-x-4">
                    {sections.map((section) => (
                      <Link
                        activeClass="active"
                        to={section.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                          {section.service}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {sections.map((section) => (
                <Link
                  activeClass="active"
                  to={section.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                  {section.service}
                </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar

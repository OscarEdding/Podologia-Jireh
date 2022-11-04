import React from "react"

function Gallery() {
  const gallery = [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/641/480/any",
    "http://placeimg.com/642/480/any",
    "http://placeimg.com/643/480/any",
    "http://placeimg.com/644/480/any",
    "http://placeimg.com/645/480/any",
    "http://placeimg.com/646/480/any",
    "http://placeimg.com/647/480/any",
    "http://placeimg.com/648/480/any",
    "http://placeimg.com/649/480/any"
  ]

  return (
    <div>
      <section className="min-h-screen body-font text-gray-600 ">
        <div className="container mx-auto px-5 py-10">
          <div className="-m-4 flex flex-wrap">
            { gallery.map((img) => (
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <span className="relative block h-48 overflow-hidden rounded">
                  <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src={img} />
                </span>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">The Catalyzer</h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

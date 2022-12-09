import { React } from "react"


const Carousel = () => {

  const buttons = [
    {
      slide: "0",
      label: "Slide 1",
      active: "active",
      current: "true"
    },
    {
      slide: "1",
      label: "Slide 2"
    },
    {
      slide: "2",
      label: "Slide 3"
    },
    {
      slide: "3",
      label: "Slide 4"
    }
  ]

  const carousel = [
    {
      img: "https://podologia-jireh.s3.sa-east-1.amazonaws.com/Dise%C3%B1o+sin+t%C3%ADtulo.png",
      alt: "1",
      active: "active"
    },
    {
      img: "https://podologia-jireh.s3.sa-east-1.amazonaws.com/Carousel/Carousel_2.jpg",
      alt: "2"
    },
    {
      img: "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/143654007_409017116993149_8920383359288300757_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=C9tVl9k2nvkAX92gktT&tn=p8q4hE4A6cPTnmiE&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjQ5NzQ1NjMzMzY2NDk1OTI2Mw%3D%3D.2-ccb7-5&oh=00_AfD_tqH_SM-MUYJFziwOhVMuP_K5DCo_hiA_mhsF8Pn-cw&oe=638C6769&_nc_sid=30a2ef",
      alt: "3"
    },
    {
      img: "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/144222104_843703099507799_3641601201736759394_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tthPZTUTp_kAX_3ktOF&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjQ5NzQ1OTc3ODE2MTY0NTQzNA%3D%3D.2-ccb7-5&oh=00_AfBibRyW9XqInXnKNO2T28XzomnsiZyMRLPWtFOR1idbRQ&oe=638C5292&_nc_sid=30a2ef",
      alt: "4"
    },
  ]

  return (
    <div
      id="carouselExampleCrossfade"
      className="carousel slide carousel-fade relative pt-16"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {buttons.map((button) => (
          <button
            key={button.slide}
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to={button.slide}
            className={button.active}
            aria-current={button.current}
            aria-label={button.label}
          ></button>
        ))}

      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        {carousel.map((photo, indexPhoto) => (
          <div key={indexPhoto} className={`carousel-item ${photo.active} float-left w-full`}>
            <img
              src={photo.img}
              className="block w-full"
              alt={photo.alt}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel

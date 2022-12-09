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
      img: "https://podologia-jireh.s3.sa-east-1.amazonaws.com/Carousel_1.png",
      alt: "1",
      active: "active"
    },
    {
      img: "https://podologia-jireh.s3.sa-east-1.amazonaws.com/Carousel_2.png",
      alt: "2"
    },
    {
      img: "https://podologia-jireh.s3.sa-east-1.amazonaws.com/Comparison_v1.png",
      alt: "3"
    },
    {
      img: "https://podologia-jireh.s3.sa-east-1.amazonaws.com/Comparison_v2.png",
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

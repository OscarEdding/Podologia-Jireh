import React from "react"
import { Fade } from "react-awesome-reveal"

function Gallery() {
  const gallery = [
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/146089110_421010705793866_5569519469690107456_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=0Zj32BLKRqEAX9YfFCA&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjUwMjY0ODIyMjc0NzkzMDAyNw%3D%3D.2-ccb7-5&oh=00_AfDTeAU-vcqbYKU2HqZAMSnYBObo-xCFtiD9NYzKKt6XDw&oe=638B1934&_nc_sid=30a2ef",
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/144763257_156958679383173_5877194086846059475_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=kOxJ0pcDZIsAX86isqd&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjQ5NzY4MDAxNTAwODEzMjUwMg%3D%3D.2-ccb7-5&oh=00_AfCyl7Z18XC_C95x3N47AH4lE0H1inE4rgKencgPiT88iA&oe=638B7948&_nc_sid=30a2ef",
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/146089110_421010705793866_5569519469690107456_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=0Zj32BLKRqEAX9YfFCA&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjUwMjY0ODIyMjc0NzkzMDAyNw%3D%3D.2-ccb7-5&oh=00_AfDTeAU-vcqbYKU2HqZAMSnYBObo-xCFtiD9NYzKKt6XDw&oe=638B1934&_nc_sid=30a2ef",
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/153364383_755038832061732_259518852858411155_n.jpg?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=kvyfqocujdIAX86W0k0&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjUxNzY4NTI2Nzg3MDQyNjU2NQ%3D%3D.2-ccb7-5&oh=00_AfAsEviFYJVpRDLXcsp-WeGbEKlsMZWtb0E_SXLzymq4gA&oe=638BB59C&_nc_sid=30a2ef",
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/297346274_471339401033754_8643615999536008932_n.webp?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=TaV_d15DgYkAX8St53B&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5ODI0MjI5NzA3NjEwMTQ4Ng%3D%3D.2-ccb7-5&oh=00_AfAPrT_NNk91LCJ6lrecMer64VcQ-aKcwoqURYu1-sbq_w&oe=638BB412&_nc_sid=30a2ef",
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/297808232_788507505606845_86988594447406347_n.webp?se=7&stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=aXtY_cSynfQAX8eyjRr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5ODQ0MjkzNzc0NzA0ODU3NQ%3D%3D.2-ccb7-5&oh=00_AfCUPkGTkuYxWPDbjD54I4Z6RmHicYYLMT2I0XrtyguZ-A&oe=638C1108&_nc_sid=30a2ef",
    "https://instagram.fscl27-1.fna.fbcdn.net/v/t51.2885-15/298224084_590966715985113_1751321373500384960_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fscl27-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0imh2res2BkAX8BwueN&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5OTg4MTczODA1ODk0NzcxMw%3D%3D.2-ccb7-5&oh=00_AfC2knQtmouEhkKHs60WdaUu7mAqy-j9nKaY1BP9YzYQVQ&oe=638C2DCA&_nc_sid=30a2ef",
  ]

  return (
    <div>
      <section className="min-h-screen body-font text-gray-600 ">
        <div className="container mx-auto px-5 py-10">
          <div className="-m-4 flex flex-wrap">
            {gallery.map((img, indexImg) => (
              <div key={indexImg} className="w-full p-4 md:w-1/2 lg:w-1/4">
                <Fade>
                  <span className="relative block h-48 overflow-hidden rounded">
                    <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src={img} />
                  </span>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">The Catalyzer</h2>
                    <p className="mt-1">01/09/2022</p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

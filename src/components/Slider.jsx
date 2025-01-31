// Install dependencies
// npm create vite@latest my-slider-app --template react
// cd my-slider-app
// npm install swiper
// npm install sass

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Autoplay } from "swiper/modules";
// import "./style.scss";
import "./Slider.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?auto=format&fit=crop&w=1351&q=60",
    title: "Slider One",
    subtitle: "Tagline • 2017",
  },
  {
    img: "https://images.unsplash.com/photo-1510709657750-f5a80fc8da9c?auto=format&fit=crop&w=1950&q=60",
    title: "Slider Two",
    subtitle: "Tagline • 2017",
  },
  {
    img: "https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&fit=crop&w=1951&q=60",
    title: "Slider Three",
    subtitle: "Tagline • 2017",
  },
];

function Slider() {
  return (
    <div >
      <div>
        <p>OUR SERVICES</p>
        <h1>
          Explore our servcies <br /> with one click
        </h1>
        <p>
          At our IT Services & Consulting company, we deliver tailored solutions <br />
          to empower businesses and meet their technology aspirations. With a <br />
          team of seasoned professionals, we specialize in turning challenges <br />
          into opportunities, ensuring you gain the most from your tech <br />
          investments while fostering innovation. Here’s an overview of what we <br />
          bring to the table
        </p>
      </div>
      <div>
        <section className="section__slider">
          <div className="container__center">
            <Swiper
              modules={[Navigation, Parallax, Autoplay]}
              slidesPerView={1}
              navigation
              parallax
              autoplay={{ delay: 2500 }}
              speed={1500}
              loop
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide__block">
                    <div
                      className="swiper-slide__block__img"
                      data-swiper-parallax-y="70%"
                    >
                      <a href="#" target="_blank">
                        <img src={slide.img} alt="" />
                      </a>
                    </div>
                    <div className="swiper-slide__block__text">
                      <h2 data-swiper-parallax-x="-60%" className="main__title">
                        {slide.title} <span>.</span>
                      </h2>
                      <h3
                        data-swiper-parallax-x="-50%"
                        className="main__subtitle"
                      >
                        {slide.subtitle}
                      </h3>
                      <p data-swiper-parallax-x="-40%" className="paragraphe">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <a
                        data-swiper-parallax-x="-30%"
                        className="link"
                        target="_blank"
                        href="#"
                      >
                        Discover
                      </a>
                      {/* <span data-swiper-parallax-y="60%" className="number">
                    {index + 1}
                  </span> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Slider;

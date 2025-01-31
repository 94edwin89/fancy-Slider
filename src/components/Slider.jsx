import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Autoplay } from "swiper/modules";
import "./Slider.css";
import ecommerce from "../assets/images/e-commerce.jpg";
import mobileApp from "../assets/images/mobileApp.jpg";
import website from "../assets/images/website.jpg";
import seo from "../assets/images/seo.jpg";

const slides = [
  {
    img: website,
    title: "Web App",
    subtitle: "website/Portfolio",
    paragraph: "Create stunning websites that showcase your brand and attract more clients with our custom web app development services.",
  },
  {
    img: mobileApp,
    title: "Mobile App",
    subtitle: "Mobile application",
    paragraph: "Develop mobile applications that offer seamless user experiences and meet your business needs across iOS and Android platforms.",
  },
  {
    img: seo,
    title: "SEO",
    subtitle: "Search engine optimization",
    paragraph: "Boost your online visibility and rank higher on search engines with our comprehensive SEO strategies and services.",
  },
  {
    img: ecommerce,
    title: "e-Commerce",
    subtitle: "Shopping website",
    paragraph: "Transform your retail business with an e-commerce website that provides an engaging and secure shopping experience for customers.",
  },
];

function Slider() {
  return (
    <section className="section__slider">
      <article className="container__center">
        <div>
          <p>OUR SERVICES</p>
          <h1>
            Explore our services <br /> with one click
          </h1>
          <p>
            At our IT Services & Consulting company, we deliver tailored
            solutions to empower businesses and meet their technology aspirations.
            With a team of seasoned professionals, we specialize in turning
            challenges into opportunities, ensuring you gain the most from your tech
            investments while fostering innovation. Here’s an overview of what we
            bring to the table.
          </p>
        </div>
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
                <div className="swiper-slide__block__img" data-swiper-parallax-y="70%">
                  <a href="#" target="_blank">
                    <img src={slide.img} alt={slide.title} />
                  </a>
                </div>
                <div className="swiper-slide__block__text">
                  <h2 data-swiper-parallax-x="-60%" className="main__title">
                    {slide.title} <span>.</span>
                  </h2>
                  <h3 data-swiper-parallax-x="-50%" className="main__subtitle">
                    {slide.subtitle}
                  </h3>
                  <p data-swiper-parallax-x="-40%" className="paragraphe">
                    {slide.paragraph}
                  </p>
                  <a
                    data-swiper-parallax-x="-30%"
                    className="link"
                    target="_blank"
                    href="#"
                  >
                    view all serivces
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}

export default Slider;

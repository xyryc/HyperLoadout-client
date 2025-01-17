import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <img
              className="w-full h-[72vh] object-cover z-10"
              src={slider.image}
              alt={slider.title}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-10"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 shadow-2xl z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-2 drop-shadow-2xl font-bebas-neue tracking-wide">
                {slider.title}
              </h2>
              <p className="text-lg lg:text-xl lg:w-2/5 mx-auto text-pretty opacity-80">
                {slider.description}
              </p>
              {/* <Link
                to="/services"
                className="btn btn-outline btn-neutral text-white mt-6"
              >
                Learn More
              </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

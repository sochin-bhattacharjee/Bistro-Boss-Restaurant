import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
const Category = () => {
  return (
    <div className="my-16">
        <div>
        <SectionTittle subHeading="---From 11.00 am to 10.00 pm---" heading="Order Online"></SectionTittle>
        </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="absolute text-2xl text-white font-bold bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Salad
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="absolute text-2xl text-white font-bold bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="absolute text-2xl text-white font-bold bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Coffee
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="absolute text-2xl text-white font-bold bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
              cake
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="absolute text-2xl text-white font-bold bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Salad
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;

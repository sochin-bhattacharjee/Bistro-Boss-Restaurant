import React, { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { use } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await axiosSecure.get("/reviews");
        setReviews(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, []);
  return (
    <div className="my-16">
      <SectionTittle
        heading="Testimonials"
        subHeading="---What Our Customers Says---"
      ></SectionTittle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col gap-9 items-center mx-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">- {review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

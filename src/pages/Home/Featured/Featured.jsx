import React from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="my-16 feature-item bg-fixed text-white">
      <div className="bg-black/60 p-5">
        <SectionTittle
          heading="Featured items"
          subHeading="Check It Out"
        ></SectionTittle>
        <div className="md:flex justify-between items-center gap-5">
          <div className="">
            <img src={FeaturedImg} alt="" />
          </div>
          <div className="text-start flex flex-col gap-5">
            <p>Aug 20 , 2025</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ducimus, id ut ratione alias ea quibusdam
              tenetur labore magni nesciunt quos! sit amet consectetur
              adipisicing elit. Quisquam, quae.
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="w-8/12 mx-auto pt-28">
        <h3 className="text-white md:text-5xl text-3xl font-serif">
          Nature benefits you
        </h3>
        <h1 className="my-12 text-white lg:text-7xl text-5xl ">
          Experience everything <br /> nature has to offer{" "}
        </h1>
        <Link to="/services" className="text-white flex items-center">
          Services{" "}
          <HiOutlineArrowNarrowRight className="text-2xl ml-3 transition-all duration-400 transform hover:translate-x-3" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;

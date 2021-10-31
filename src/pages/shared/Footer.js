import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700 py-20 text-gray-200">
      <div className=" md:w-9/12 w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="lg:px-5 ">
          <h1 className="text-2xl text-white">This is Bookina</h1>
          <p className="text-sm pt-5 ">
            Kamperen is equipped with everythig required for an amazing
            campground business website. Set up camp now.
          </p>
          <h1 className="py-4 text-xl">Get Social</h1>
          <div className="flex items-center">
            <BsFacebook className="text-2xl mr-4 cursor-pointer hover:text-white" />
            <BsInstagram className="text-2xl mr-4 cursor-pointer hover:text-white" />
            <FaTripadvisor className="text-3xl mr-4 cursor-pointer hover:text-white" />
            <GrTwitter className="text-2xl mr-4 cursor-pointer hover:text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-white ">Links</h1>
          <Link to="/" className="text-sm py-5 block">
            About
          </Link>
          <Link to="/" className="text-sm block">
            Tours
          </Link>
          <Link to="/" className="text-sm py-4 block">
            Blogs
          </Link>
          <Link to="/" className="text-sm  block">
            Track Orders
          </Link>
        </div>
        <div>
          <h1 className="text-2xl text-white ">Contact</h1>
          <p className="text-sm mt-5">A: Dhaka, Bangladesh</p>
          <p className="text-sm mt-5">P: +01999999999</p>
          <p className="text-sm mt-5">W: +948405343</p>
        </div>
        <div>
          <h1 className="text-2xl text-white ">Subscribe</h1>
          <input
            type="text"
            className="mt-12 p-2 rounded focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

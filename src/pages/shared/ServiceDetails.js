import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaBath } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  const history = useHistory();

  useEffect(() => {
    fetch(`https://evil-warlock-97392.herokuapp.com/services/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);
  const bookingHandler = () => {
    history.push(`/booking/${id}`);
  };

  return (
    <div className="my-5  bg-gray-50">
      <div className="md:w-9/12 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 py-10">
          <div className="my-5">
            <img src={service?.imageUrl} alt="" />
          </div>
          <div className="my-5">
            <p className="md:text-xl flex items-center pb-5 font-serif font-capitalized">
              <GoLocation />
              {service?.location}
            </p>
            <h1 className="md:text-4xl font-serif font-capitalized">
              {service?.title}
            </h1>
            <p className="text-gray-500 py-10">{service?.desc}</p>
            <p className="md:text-xl flex items-center pb-5 font-serif font-capitalized">
              <BiTimeFive />
              {service?.duration}
            </p>
            <p className="flex items-center justify-between text-xl">
              <span>{service?.capacity}</span>
              <span>${service?.cost}</span>
            </p>
            <button
              onClick={bookingHandler}
              className="my-10 py-2 px-5 bg-purple-500 rounded text-white flex items-center"
            >
              <BsBookmarkPlus className="font-bold text-xl mr-1" />
              Book Now
            </button>
            <div className="flex space-x-6  justify-end py-4">
              <CgSmartHomeRefrigerator className=" text-3xl text-gray-500" />
              <FaBath className=" text-3xl text-gray-500" />
              <AiOutlineWifi className=" text-3xl text-gray-500" />
              <RiComputerLine className=" text-3xl text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

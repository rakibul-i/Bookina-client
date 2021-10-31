import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import UseContext from "../../context/useContext";
import Service from "../shared/Service";

const Services = () => {
  const { services } = UseContext();
  return (
    <div className="bg-gray-200 py-10">
      <div className="md:w-9/12 w-11/12 mx-auto ">
        <h1 className="text-5xl text-center font-serif">
          Book your Dream <br /> vacation now
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 py-10">
          {services.length ? (
            services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))
          ) : (
            <div className="flex lg:col-span-2 items-center justify-center my-20">
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;

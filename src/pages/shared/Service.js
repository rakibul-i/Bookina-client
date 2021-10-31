import React from "react";
import { useHistory } from "react-router-dom";

const Service = (props) => {
  const { imageUrl, capacity, title, _id } = props.service;
  const history = useHistory();
  const getDetails = (id) => {
    history.push(`/services/${id}`);
  };
  return (
    <div
      onClick={() => getDetails(_id)}
      className="md:p-10 text-center service p-3 bg-white rounded m-4 overflow-hidden cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          className="service-image transition-all duration-500"
          src={imageUrl}
          alt={title}
        />
      </div>
      <p className="text-sm text-gray-600 py-2">{capacity}</p>
      <h1>{title}</h1>
    </div>
  );
};

export default Service;

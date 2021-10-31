import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const ServicesList = (props) => {
  const { _id, title } = props.service;

  // delete service by id
  const serviceDeleteHandler = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5050/services/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Service is not deleted", "", "info");
      }
    });
  };
  return (
    <div className="border-b-2 py-2 my-2 border-purple-800 px-2 flex items-center justify-between">
      <h3>{title}</h3>
      <div>
        <button>
          <FiEdit className="text-xl text-green-500" />
        </button>
        <button onClick={() => serviceDeleteHandler(_id)}>
          <AiTwotoneDelete className="text-xl text-red-700 lg:ml-6" />
        </button>
      </div>
    </div>
  );
};

export default ServicesList;

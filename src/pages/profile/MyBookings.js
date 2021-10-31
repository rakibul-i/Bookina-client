import React, { useEffect, useState } from "react";
import UseContext from "../../context/useContext";
import ProfileMenu from "./ProfileMenu";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { currentUser } = UseContext();
  const [userBookings, setUserBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5050/bookings?email=${currentUser?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setUserBookings(data);
      });
  }, [userBookings]);

  // delete booking by _id
  const bookingDeleteHandler = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5050/bookings/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Booking is not deleted", "", "info");
      }
    });
  };
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-5">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1">
        <ProfileMenu />
        <div className="lg:col-span-4 md:col-span-3 px-5">
          <h1 className="lg:text-4xl md:text-xl my-5 text-green-900 font-serif font-capitalized">
            {currentUser?.displayName} here all of your bookings
          </h1>
          <div>
            {userBookings.map((booking) => {
              return (
                <div key={booking._id}>
                  <div className="border py-2 my-2 border-purple-800 px-2 md:flex items-center justify-between">
                    <div className="lg:flex space-x-3">
                      <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">
                        {booking?.title}
                      </h3>
                      <h3 className="lg:border-r-2 md:text-lg text-sm lg:pr-2 border-purple-600">
                        {booking?.email}
                      </h3>
                      <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">
                        {booking?.address}
                      </h3>
                      <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">
                        ${booking?.cost}
                      </h3>
                      <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">
                        ${booking?.date}
                      </h3>
                      <h3 className="lg:border-r-2 lg:pr-2  border-purple-600">
                        {booking?.status}
                      </h3>
                    </div>
                    <div>
                      <button>
                        <FiEdit className="text-xl text-green-500" />
                      </button>
                      <button onClick={() => bookingDeleteHandler(booking._id)}>
                        <AiTwotoneDelete className="text-xl text-red-700 lg:ml-6" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;

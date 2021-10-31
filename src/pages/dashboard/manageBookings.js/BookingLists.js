import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const BookingLists = (props) => {
  const { _id, title, email, date, status } = props.booking;

  // delete booking
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
        fetch(`https://evil-warlock-97392.herokuapp.com/bookings/${id}`, {
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

  // handleStatus
  const handleStatus = (e) => {
    const updateStatus = e.target.value;
    const updateInfo = {
      id: _id,
      status: updateStatus,
    };
    fetch(`https://evil-warlock-97392.herokuapp.com/bookings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Good job!", "Booking modified success!", "success");
        }
      });
  };
  return (
    <div className="border-b-2 py-2 my-2 border-purple-800 px-2 flex items-center justify-between">
      <div className="lg:flex lg:space-x-3">
        <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">{title}</h3>
        <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">{email}</h3>
        <h3 className="lg:border-r-2 lg:pr-2 border-purple-600">{date}</h3>
        <select
          onChange={handleStatus}
          className={
            status === "pending"
              ? "bg-red-100 px-2 py-1 rounded focus:outline-none"
              : "bg-green-100 px-2 py-1 rounded focus:outline-none"
          }
        >
          {status === "pending" ? (
            <>
              <option value="pending">pending</option>
              <option value="approved">approved</option>
            </>
          ) : (
            <>
              <option value="approved">approved</option>
              <option value="pending">pending</option>
            </>
          )}
        </select>
      </div>
      <div>
        <button>
          <FiEdit className="text-xl text-green-500" />
        </button>
        <button onClick={() => bookingDeleteHandler(_id)}>
          <AiTwotoneDelete className="text-xl text-red-700 lg:ml-6" />
        </button>
      </div>
    </div>
  );
};

export default BookingLists;

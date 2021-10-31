import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import UseContext from "../../context/useContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookingForm = () => {
  const { id } = useParams();
  const { currentUser } = UseContext();
  const [service, setService] = useState(null);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5050/services/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  const onSubmit = (data) => {
    const bookingData = {
      email: data.email,
      address: data.address,
      username: data.username,
      title: service?.title,
      cost: service?.cost,
      image: service?.imageUrl,
      date: data.date,
      status: "pending",
    };

    Swal.fire({
      title: "Do you want to book?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Book",
      denyButtonText: `Don't book`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5050/bookings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire("booked successfully!", "", "success");
              history.push("/myBookings");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("service is not booked", "", "info");
      }
    });
  };

  return (
    <div className="md:w-9/12 w-11/12 mx-auto flex  justify-center py-20">
      <div>
        <h1 className="md:text-2xl text-xl">Please fill the form</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-3">
            <input
              className="focus:outline-none bg-gray-200 md:w-96 px-3 py-1 rounded block"
              defaultValue={currentUser?.displayName}
              {...register("username", { required: true })}
            />
            <span className="text-red-500">
              {errors.username?.type === "required" && "username is required"}
            </span>
          </div>
          <div className="py-3">
            <input
              className="focus:outline-none bg-gray-200 md:w-96 px-3 py-1 rounded block"
              defaultValue={currentUser?.email}
              type="email"
              {...register("email", { required: true })}
            />
            <span className="text-red-500">
              {errors.email?.type === "required" && "email is required"}
            </span>
          </div>
          <div className="py-3">
            <input
              className="focus:outline-none bg-gray-200 md:w-96 px-3 py-1 rounded block"
              type="date"
              {...register("date", { required: true })}
            />
            <span className="text-red-500">
              {errors.date?.type === "required" && "date is required"}
            </span>
          </div>
          <div className="py-3">
            <input
              className="focus:outline-none bg-gray-200 md:w-96 px-3 py-1 rounded block"
              type="text"
              placeholder="current address"
              {...register("address", { required: true })}
            />
            <span className="text-red-500">
              {errors.address?.type === "required" && "address is required"}
            </span>
          </div>

          <input
            className="my-4 py-2 px-5 bg-purple-500 rounded text-white flex items-center"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

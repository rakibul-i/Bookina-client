import React, { useEffect, useState } from "react";
import DashboardMenu from "../dashboardMenu";
import BookingLists from "./BookingLists";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://evil-warlock-97392.herokuapp.com/allBookings`)
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      });
  }, [bookings]);
  return (
    <div className="bg-purple-50 py-20 mt-2">
      <div className="md:w-9/12 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-1">
          <div className="lg:col-span-2 md:col-span-2">
            <DashboardMenu />
          </div>
          <div className="lg:col-span-6 md:col-span-2">
            {bookings.length ? (
              bookings.map((booking) => (
                <BookingLists
                  key={booking._id}
                  booking={booking}
                ></BookingLists>
              ))
            ) : (
              <div
                className="flex items-center justify-center"
                style={{ height: "40vh" }}
              >
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
    </div>
  );
};

export default Dashboard;

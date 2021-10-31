import React from "react";
import DashboardMenu from "../dashboardMenu";
import ServiceForm from "./ServiceForm";

const AddService = () => {
  return (
    <div className="bg-purple-50 py-20 mt-2">
      <div className="md:w-9/12 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-1">
          <div className="lg:col-span-2 md:col-span-1">
            <DashboardMenu />
          </div>
          <div className="lg:col-span-6 md:col-span-3 flex justify-center">
            <ServiceForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;

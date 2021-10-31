import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const serviceInfo = {
      imageUrl,
      capacity: data.capacity,
      duration: data.duration,
      cost: data.cost,
      title: data.title,
      desc: data.desc,
    };
    axios
      .post("https://evil-warlock-97392.herokuapp.com/services", serviceInfo)
      .then(function (response) {
        console.log(response.data.insertedId);
        if (response.data.insertedId) {
          Swal.fire("Good job!", "new Service added successfully", "success");
          history.push("/services");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // upload and get image url from IMGBB
  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-xl text-center mt-5">Add new service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2">
          <input
            {...register("image", { required: true })}
            className="border px-3 py-3 md:w-96 bg-white focus:outline-none block"
            type="file"
            onChange={handleImageUpload}
            placeholder="image"
          />
          <span className="text-red-400">
            {errors.image?.type === "required" && "category is required"}
          </span>
        </div>
        <div>
          <input
            className="focus:outline-none block px-5 py-2 w-full rounded md:w-96 "
            placeholder="service title"
            {...register("title", { required: true })}
          />
          <span className="text-red-500 pl-1">
            {errors.title?.type === "required" && "Title  is required"}
          </span>
        </div>

        <div>
          <select
            {...register("capacity", { required: true })}
            className="focus:outline-none bg-white block w-full px-5 py-2 rounded md:w-96 "
          >
            <option value="family">Family</option>
            <option value="specialHouse">Special House</option>
            <option value="friends">Friends</option>
            <option value="camping">Camping</option>
          </select>
        </div>
        <div>
          <select
            {...register("duration", { required: true })}
            className="focus:outline-none mt-5 bg-white block w-full px-5 py-2 rounded md:w-96 "
          >
            <option value="oneDay">1 day</option>
            <option value="twoThreeDay">2-3 days</option>
            <option value="twoSixDay">2-6 days</option>
            <option value="sixTenDay">6-10 days</option>
          </select>
        </div>
        <div className="my-4">
          <select
            {...register("cost", { required: true })}
            className="focus:outline-none mt-5 bg-white w-full block px-5 py-2 rounded md:w-96 "
          >
            <option value="140">140</option>
            <option value="299">299</option>
            <option value="499">499</option>
            <option value="799">799</option>
          </select>
        </div>

        <div>
          <textarea
            {...register("desc", { required: true })}
            className="focus:outline-none block px-5 py-2 w-full rounded md:w-96 "
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <input
          className="bg-purple-600 text-white px-4 py-1 rounded mt-5"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ServiceForm;

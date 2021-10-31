import React from "react";

const About = () => {
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-10 ">
      <h1
        className="text-center md:text-8xl text-6xl text-gray-200"
        style={{ marginBottom: "-30px" }}
      >
        About
      </h1>
      <h1 className="text-center md:text-5xl text-3xl font-medium">
        Welcome to Wonderer <br /> Camping Ground
      </h1>
      <p className="text-center mt-9">
        We provide all types of camping like family, friends, children. We{" "}
        <br />
        also ensure best security for ours guests. Almost 30+ years, our <br />
        company has been working for you that you can engage with nature and
        enjoy it.
      </p>
      <div className="flex md:justify-between justify-center items-center">
        <img
          src="https://t3.ftcdn.net/jpg/02/22/74/80/360_F_222748030_2KLkUB3fFHP8UzcJmx6jgkNEovpvgioY.jpg"
          alt=""
          className="about-image"
        />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/748/497/small_2x/orange-tent-icon-free-vector.jpg"
          alt=""
          className="about-image md:block hidden"
        />
        <img
          src="https://img.freepik.com/free-vector/camping-with-caravan-concept-illustration_114360-3496.jpg?size=626&ext=jpg"
          alt=""
          className="about-image lg:block hidden"
        />
      </div>
    </div>
  );
};

export default About;

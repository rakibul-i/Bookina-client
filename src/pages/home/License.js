import React from "react";

const License = () => {
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-10">
      <h1 className="text-center text-3xl text-purple-200 font-serif">
        Company License
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 py-10">
        <div>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/blog.easystore.co/images/wRSOvNq5ZhhMIXVD7uQRDjJk04ty84HRZor3v1Fb.jpeg"
            alt=""
          />
        </div>
        <div className="lg:mt-0 mt-5">
          <h1 className="md:text-2xl  font-semibold font-serif ">
            United Nations Provide us World Wide License
          </h1>
          <p className=" lg:py-10 py-5" style={{ lineHeight: "30px" }}>
            Though we are providing all types of vacation services for 30 years,
            Our clients are really happy with our services. That's why we are
            working harder and more harder for you. All of the reasons and your
            best support the United Nations provides us a business license all
            over the world. Now we can provide our services all over the world
            and make you more happy.
          </p>
          <p className="text-xl">
            Thanks to guys for having and supporting us .
          </p>
        </div>
      </div>
    </div>
  );
};

export default License;

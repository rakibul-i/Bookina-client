import React from "react";
import Footer from "../shared/Footer";
import About from "./About";
import Banner from "./Banner";
import License from "./License";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <License />
      <Footer />
    </div>
  );
};

export default Home;

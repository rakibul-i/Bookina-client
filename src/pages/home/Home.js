import React from "react";
import UseContext from "../../context/useContext";
import Footer from "../shared/Footer";
import About from "./About";
import Banner from "./Banner";
import License from "./License";
import Services from "./Services";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = () => {
  const { services } = UseContext();

  if (!services.length) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "80vh" }}
      >
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
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

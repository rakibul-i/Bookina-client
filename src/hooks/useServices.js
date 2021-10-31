import React, { useEffect, useState } from "react";

const useServices = () => {
  const url = `https://evil-warlock-97392.herokuapp.com/services`;
  const [services, setServices] = useState([]);

  // load products asynchronously
  const loadProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setServices(data);
  };
  useEffect(() => {
    loadProducts(url);
  }, [services]);
  return { services, setServices };
};

export default useServices;

import React from "react";
import { useState, useEffect } from "react";
import ApiComponent from "./ApiComponent";

function Fetcher({ handleClick }) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const getAPI = () => {
    setLoader(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoader(false);
      });
  };

  useEffect(() => {
    getAPI(); // eslint-disable-next-line
  }, []);

  if (!data || loader) {
    return (
      <h1 style={{ position: "relative", left: "850px", color: "yellow" }}>
        loading....
      </h1>
    );
  }
  let allData = data.map((val, index) => {
    return (
      <ApiComponent
        key={index}
        category={val.category}
        login={val.title}
        avatarURL={val.price}
        source={val.image}
        description={val.description}
        rating={val.rating.rate}
        handleClick={handleClick}
        item={val}
      />
    );
  });

  return <>{allData} </>;
}

export default Fetcher;

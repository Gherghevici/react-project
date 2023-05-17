import React from "react";
import { useEffect, useState } from "react";
import styles from "./Styles/home.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      {data.map((item) => console.log(data))}
    </div>
  );
};

export default Home;

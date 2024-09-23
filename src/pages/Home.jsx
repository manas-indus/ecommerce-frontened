import React, { useState, useEffect } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(" Im here");
    // Fetch products from the API
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <h2>Products</h2>
      <Product products={products} />
    </>
  );
};

export default Home;

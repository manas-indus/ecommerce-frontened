// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(" Im here");
    // Fetch products from the API
    // fetch("http://localhost:3000/api/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setProducts(data);
    //   })
      
    axios.get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data); // Access data from the response
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="homepage"> {/* Ensure the homepage class wraps the content */}
    <Header />
    <main>
      <h2>Products</h2>
      <Product products={products} />
    </main>
    <Footer />
  </div>
  );
};
export default Home;

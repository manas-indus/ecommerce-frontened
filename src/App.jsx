/* eslint-disable no-unused-vars */
// src/HomePage.jsx
import React from "react";
import "./App.css"; // You'll create this for styles
import watchImage from "./assets/watch.jpg";
import laptop from "./assets/laptop.jpg";
import book from "./assets/history.jpg";
import shirt from "./assets/shirt.jpg";
import machine from "./assets/washing.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <h1>MyShop</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands, and more" />
          <button>Search</button>
        </div>
        <div className="header-right">
          <button>Login</button>
          <button>Cart</button>
        </div>
      </header>

      <div className="banner">
        <img
          src={watchImage}
          alt="Banner"
        />
      </div>

      <div className="product-categories">
        <h2>Top Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src={laptop} alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category-item">
            <img src={shirt} alt="Clothing" />
            <p>Clothing</p>
          </div>
          <div className="category-item">
            <img src={machine} alt="Home Appliances" />
            <p>Home Appliances</p>
          </div>
          <div className="category-item">
            <img src={book} alt="Books" />
            <p>Books</p>
          </div>
        </div>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={laptop} alt="Product 1" />
            <p>laptop</p>
            <p>$99</p>
          </div>
          <div className="product-item">
            <img src={machine} alt="Product 2" />
            <p>Washing machine</p>
            <p>$149</p>
          </div>
          <div className="product-item">
            <img src={book} alt="Product 3" />
            <p>NCERT book</p>
            <p>$199</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

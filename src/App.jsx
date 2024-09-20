/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
      <main>
        <h2>Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="card border-success mb-3 bg-" style={{ maxWidth: "30rem" }}>
                <div className="card-header">
                  <img
                    className="card-img-top"
                    src={`http://localhost:3000/api/products/image/${product.id}`}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-primary">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";


// const HomePage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the API
//     fetch("http://localhost:3000/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <div className="homepage">
//       <header className="header">
//         <div className="header-left">
//           <h1>MyShop</h1>
//         </div>
//         <div className="search-bar">
//           <input type="text" placeholder="Search for products, brands, and more" />
//           <button>Search</button>
//         </div>
//         <div className="header-right">
//           <button>Login</button>
//           <button>Cart</button>
//         </div>
//       </header>
//       <main>
//         <h2>Products</h2>
//         <div className="row">
//             {products.map((product) => (
               
//                <div key={product.id} className="col-md-3"> {/* Adjust the column width as needed */}
//               <div className="card border-primary mb-3" style={{ maxWidth: "30rem" }}>
//               <div className="card-header">
//               <img className="card-img-top" src="src/assets/laptop.jpg" alt="Card image cap" />
//               </div>
//               <div className="card-body text-primary">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">
//                 {product.description}
//                 </p>
//                 <p className="card-text">
//                 ${product.price}
//                 </p>
//               </div>
//             </div>
//               </div>
              
//             ))}
//             </div>
//       </main>
//       <footer className="footer">
//         <p>&copy; 2024 MyShop. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

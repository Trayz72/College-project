import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css"; // Import your stylesheet

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/productList")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="product-list-container">
        <h1>Product List</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.ProductId} className="product-card">
              <img src={`/images/${product.Image}`} alt={product.ProductName} />
              <div className="product-info">
                <h3>{product.ProductName}</h3>
                <p>{product.ProductDescription}</p>
                <p>Price: ${product.ProductPrice}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

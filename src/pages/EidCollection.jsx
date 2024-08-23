import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const EidCollection = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // No change needed here

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        
        <div className="Card">
          {products.map((product) => (
            <Link to={`/Products/${product.id}`}>
            <div key={product.id} className="card" style={{ width: "28rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                style={{ width: "100px", height: "100px" }}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.slice(0, 50) + "..."}
                </h5>
                <p className="card-text">
                  {product.description.slice(0, 50) + "..."}
                </p>
                <h5 className="card-price">Rs {product.price}</h5>
                <h5 className="card-price">
                  Sold Items: {product.rating.count}
                </h5>
              </div>
            </div>
            </Link>
          ) )}
        </div>
      
      )}
    </>
  );
};

export default EidCollection;

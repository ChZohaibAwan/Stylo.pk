import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "./Slider";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
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
    <div>
      <Slider />
    </div>
      {loader ? (
        <Loader />
      ) : (
        <Carousel responsive={responsive}>
          {products.map((product) => (
            <div key={product.id} style={{ padding: '1rem', textAlign: 'center' }}>
              <Link to={`/Products/${product.id}`}> 
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '50%', height: '14rem', objectFit:'cover' }}
                />
                <h5 style={{ marginTop: '0.5rem' }}>
                  {product.title.slice(0, 20) + "..."}
                 </h5>
                 <h5>{product.price}</h5>
              {/* <p style={{ color: '#888' }}>
                  {product.description.slice(0, 20) + "..."}
                </p>
                <h5 style={{ margin: '0.5rem 0' }}>Rs {product.price}</h5>
                <h5 style={{ color: '#888' }}>
                  Sold Items: {product.rating.count} 
                </h5> */}
              </Link>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Home;

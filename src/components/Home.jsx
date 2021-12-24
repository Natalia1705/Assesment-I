/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const Home = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          const Completionist = () => {
            return (
              <>
                <div>Sorry, but our time is up ! </div>
              </>
            );
          };
          const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return <Completionist />;
            } else {
              // Render a countdown
              return (
                <span>
                  {hours > 9 ? hours : "0" + hours}:
                  {minutes > 9 ? minutes : "0" + minutes}:
                  {seconds > 9 ? seconds : "0" + seconds}
                  <a
                    href={`/product/${product.id}`}
                    class="btn btn-outline-dark"
                  >
                    Go to Detail
                  </a>
                </span>
              );
            }
          };

          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250rem"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <Countdown
                      date={
                        Date.now() + Math.floor(Math.random() * (300000 + 1))
                      }
                      renderer={renderer}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-2 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Home;

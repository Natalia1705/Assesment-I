/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

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

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img src={product.image} alt={product.title} height="400px" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="text-uppercase text-black-10">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="display-10">{product.description}</p>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fas fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;

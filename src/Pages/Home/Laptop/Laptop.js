import React from "react";

const Laptop = ({ laptop }) => {
  const { name, img } = laptop;
  return (
    <div className="card m-2 text-center col-sm-12 col-md-6 col-lg-4" style={{ width: "20rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
        Some of our most beloved laptops were those that dared to be different.
        </p>
        <a href="#" className="btn btn-dark">
          Explore
        </a>
      </div>
    </div>
  );
};

export default Laptop;

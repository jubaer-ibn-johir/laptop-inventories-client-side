import React from "react";

const Laptop = ({ laptop }) => {
  const { name, img } = laptop;
  return (
    <div className="card m-2 text-center col-sm-12 col-md-6 col-lg-4" style={{ width: "20rem" }}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">
        Some of our most beloved laptops were those that dared to be different.
        </p>
        <a href="#" class="btn btn-primary">
          Explore
        </a>
      </div>
    </div>
  );
};

export default Laptop;

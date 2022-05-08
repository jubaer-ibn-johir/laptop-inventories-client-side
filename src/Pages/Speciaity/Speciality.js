import React from "react";
import "./Speciality.css";

const Speciality = () => {
  return (
    <div className="extra-section">
      <div className="text-center ">
        <h2 className="special-text"> OUR SPECIALITY</h2>
        <h5>Best Solution for Your Needs</h5>
      </div>
      <div className=" container mt-3 speciality">
        <div>
          <h3>Storage</h3>
          <h5>
            We provide storage for Laptops or anyn kind of devices parts to
            automotive parts for long- or short-term storage.
          </h5>
        </div>
        <div>
          <h3>Distribution</h3>
          <h5>
            {" "}
            DEPOT management system and reporting capabilities allow us to
            fulfill all your orders.
          </h5>
        </div>
        <div>
          <h3>Trucking</h3>
          <h5>
            Whether it's overnight or during the day, across town or across the
            North Dakota region, Laptops will be at your doors.
          </h5>
        </div>
      </div>
      <div>
        <h2 className="text-center m-4">Do You Know?</h2>
        <div className="doyouknow">
          <div>
            <h4>
              We were looking for someone who can help us to protect the product
              and give us some additional capacity. Make sure you are capable
              person who can stay in the environment to fulfill our
              requirements. Great team to work with and everybody has been a
              pleasure to deal with.
            </h4>
            <h6>
              Jubaer <small>(Chief Executive Officer)</small>
            </h6>
          </div>
          <div>
            <h4>
              We came to them with a complicated project, but they handled it
              with ease. The experienced workers are able to sort and fast
              supply laptops with efficiency. The workers are professional and
              prompt. We couldn't be more pleased with the customer service and
              would highly recommend LI(Laptops Inventories).
            </h4>
            <h6>
              Mab Rafi <small>(Managing Director)</small>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;

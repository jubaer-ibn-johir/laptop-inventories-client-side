import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div className="text-center d-block w-25 mt-3 mx-auto">
      {/* <h2>: {inventory.name}</h2> */}
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={inventory.img} />
          <Card.Body>
            <Card.Title>{inventory.name}</Card.Title>
            <h6>ID: {inventory._id}</h6>

            <Card.Text>
              {inventory.description}
            </Card.Text>
            <h6>Quantity: {inventory.quantity}</h6>
            <h6>Supplier: {inventory.supplier}</h6>
            <h6>price: {inventory.price}</h6>
            <Button variant="dark">Delivered</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-dark mt-4"> Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryDetail;

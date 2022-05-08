import React from "react";
import { useForm } from "react-hook-form";

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  if(user){
    console.log(user)
  }

  return (
    <div className="w-25 mx-auto">
      <h2>Please Add New Items</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Email"
          value={user.email}
          readOnly disabled
          {...register("email", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  );
};

export default AddNewItem;

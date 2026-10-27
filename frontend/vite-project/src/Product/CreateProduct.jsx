import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };

    try {
      await axios({
        url: "http://localhost:8000/product",
        method: "post",
        data: data,
      });

      setName("");
      setPrice("");
      setQuantity("");
      setDescription("");

      toast.success("Product Created Successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable To Create Product.");
    }
  };

  /* 
    send data to backend through api 

    url = localhost:8000/product
    method = post 
    
    */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <button>Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;

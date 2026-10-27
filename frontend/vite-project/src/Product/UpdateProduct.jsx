import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");
  let params = useParams();

  useEffect(() => {
    let getProduct = async () => {
      try {
        let result = await axios({
          url: `http://localhost:8000/product/${params.id}`,
          method: "get",
        });

        let product = result.data.result;
        setName(product.name || "");
        setPrice(product.price || "");
        setQuantity(product.quantity || "");
        setDescription(product.description || "");
      } catch (error) {
        toast.error(error.response?.data?.message || "Unable To Load Product.");
      }
    };

    getProduct();
  }, [params.id]);

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
        url: `http://localhost:8000/product/${params.id}`,
        method: "patch",
        data: data,
      });

      setName("");
      setPrice("");
      setQuantity("");
      setDescription("");

      toast.success("Product Updated Successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable To Update Product.");
    }
  };

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

        <button>Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;

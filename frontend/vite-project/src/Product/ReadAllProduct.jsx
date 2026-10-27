import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReadAllProduct = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let getProducts = async () => {
      try {
        let result = await axios({
          url: "http://localhost:8000/product",
          method: "get",
        });

        setProducts(result.data.result);
      } catch (error) {
        console.error(error);
        toast.error("Unable To Load Products");
      }
    };

    getProducts();
  }, []);

  // DELETE PRODUCT
  let handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${id}`,
        method: "delete",
      });

      console.log(result.data);

      // Remove deleted product from the screen
      setProducts((currentProducts) =>
        currentProducts.filter((value) => value._id !== id),
      );

      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed To Delete Product");
    }
  };

  return (
    <div>
      {products.map((value) => {
        return (
          <div key={value._id}>
            <p>Name: {value.name}</p>
            <p>Price: {value.price}</p>
            <p>Quantity: {value.quantity}</p>
            <p>Description: {value.description}</p>
            <button
              onClick={() => {
                navigate(`/product/${value._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/product/update/${value._id}`);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                handleDelete(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSingleProduct = () => {
  let [product, setProducts] = useState({});

  let params = useParams();

  useEffect(() => {
    let getProduct = async () => {
      try {
        let result = await axios({
          url: `http://localhost:8000/product/${params.id}`,
          method: "get",
        });

        setProducts(result.data.result);
      } catch (error) {
        console.error(error);
        toast.error("Unable To Load Product");
      }
    };

    getProduct();
  }, [params.id]);

  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ReadSingleProduct;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateProduct from "./Product/CreateProduct";
import ReadAllProduct from "./Product/ReadAllProduct";
import ReadSingleProduct from "./Product/ReadSingleProduct";
import UpdateProduct from "./Product/UpdateProduct";
import CreateUser from "./User/CreateUser";
import ReadAllUser from "./User/ReadAllUser";
import ReadSingleUser from "./User/ReadSingleUser";
import UpdateUser from "./User/UpdateUser";

const SunwayRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/product" replace />} />
        <Route path="/product/create" element={<CreateProduct></CreateProduct>}>
          {" "}
        </Route>
        <Route path="/product" element={<ReadAllProduct></ReadAllProduct>}>
          {" "}
        </Route>
        <Route
          path="/product/:id"
          element={<ReadSingleProduct></ReadSingleProduct>}
        >
          {" "}
        </Route>
        <Route
          path="/product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        >
          {" "}
        </Route>

        <Route path="/user/create" element={<CreateUser></CreateUser>}>
          {" "}
        </Route>
        <Route path="/user" element={<ReadAllUser></ReadAllUser>}>
          {" "}
        </Route>
        <Route path="/user/:id" element={<ReadSingleUser></ReadSingleUser>}>
          {" "}
        </Route>
        <Route path="/user/update/:id" element={<UpdateUser></UpdateUser>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default SunwayRoute;

/* 
localhost:5173/product/create => CreateProduct
localhost:5173/product => ReadAllProduct
localhost:5173/product/:id => ReadSingleProduct
localhost:5173/product/update/:id => UpdateProduct

localhost:5173/users => ReadAllUser
localhost:5173/user/create => CreateUser    
localhost:5173/user/:id => ReadSingleUser
localhost:5173/user/update/:id => UpdateUser
*/

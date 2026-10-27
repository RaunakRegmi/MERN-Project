import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSingleUser = () => {
  let [user, setUsers] = useState({});
  let params = useParams();

  useEffect(() => {
    let getUser = async () => {
      try {
        let result = await axios({
          url: `http://localhost:8000/user/${params.id}`,
          method: "get",
        });

        setUsers(result.data.result);
      } catch (error) {
        console.error(error);
        toast.error("Unable To Load User");
      }
    };

    getUser();
  }, [params.id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: Protected</p>
      <p>Address: {user.address}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default ReadSingleUser;

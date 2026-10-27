import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let getUsers = async () => {
      try {
        let result = await axios({
          url: "http://localhost:8000/user",
          method: "get",
        });

        setUsers(result.data.result);
      } catch (error) {
        console.error(error);
        toast.error("Unable To Load Users");
      }
    };

    getUsers();
  }, []);

  let handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:8000/user/${id}`,
        method: "delete",
      });

      console.log(result.data);

      // Remove deleted user from the screen
      setUsers((currentUsers) =>
        currentUsers.filter((value) => value._id !== id),
      );

      toast.success("User Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed To Delete User");
    }
  };

  return (
    <div>
      {users.map((value) => {
        return (
          <div key={value._id}>
            <p>Name: {value.name}</p>
            <p>Email: {value.email}</p>
            <p>Password: Protected</p>
            <p>Address: {value.address}</p>
            <p>Phone: {value.phone}</p>
            <button
              onClick={() => {
                navigate(`/user/${value._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/user/update/${value._id}`);
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

export default ReadAllUser;

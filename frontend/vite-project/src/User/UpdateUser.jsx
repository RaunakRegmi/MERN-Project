import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let params = useParams();

  useEffect(() => {
    let getUser = async () => {
      try {
        let result = await axios({
          url: `http://localhost:8000/user/${params.id}`,
          method: "get",
        });

        let user = result.data.result;
        setName(user.name || "");
        setEmail(user.email || "");
        setPassword(user.password || "");
        setAddress(user.address || "");
        setPhone(user.phone || "");
      } catch (error) {
        toast.error(error.response?.data?.message || "Unable To Load User.");
      }
    };

    getUser();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      password: password,
      address: address,
      phone: phone,
    };

    try {
      await axios({
        url: `http://localhost:8000/user/${params.id}`,
        method: "patch",
        data: data,
      });

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");

      toast.success("User Updated Successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable To Update User.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>

          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label>Email:</label>

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <label>Address:</label>

          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>

        <div>
          <label>Phone:</label>

          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <button>Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");

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
        url: "http://localhost:8000/user",
        method: "post",
        data: data,
      });

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");

      toast.success("User Created Successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable To Create User.");
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
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <button>Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;

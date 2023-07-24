import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", cred)
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> Username: </label>
          <input onChange={handleChange} name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            id="password"
          />
        </div>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Login;

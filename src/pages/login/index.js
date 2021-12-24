import React, { useState } from "react";
import { API, setAuth } from "../../config/api";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/login", form, config);
      setAuth(response.data.access_token);

      localStorage.setItem("token", response.data.access_token);
      console.log(response);
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <p>Login</p>
        <input
          name="username"
          placeholder="username"
          type="text"
          onChange={handleOnChange}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={handleOnChange}
        />
        <button onClick={handleOnSubmit}>Login</button>
      </div>
    </>
  );
};

export default Login;

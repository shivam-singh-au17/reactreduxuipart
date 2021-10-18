import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    handleLogin(payload);
  };

  return (
    <div className="bg-warning p-4 mt-5">
      <h2 className="text-center">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-3"
          type="text"
          placeholder="Enter Your UserName"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="form-control my-3"
          type="password"
          placeholder="Enter Your PassWord"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" className="btn btn-info"></input>
      </form>
    </div>
  );
};

export { Login };

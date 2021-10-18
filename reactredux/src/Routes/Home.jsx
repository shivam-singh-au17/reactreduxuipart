import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AddTask from "../components/ConfiguringStore/AddTask";

const Home = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const token = useSelector(state => state.auth.token)

  if (!isAuth) {
    return <Redirect to="/login" />;
}

  return (
    <>
      <AddTask />
      <h1>Token Is: {token}</h1>
    </>
  );
};

export default Home;

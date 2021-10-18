import React from 'react'
import { Login } from '../components/ConfiguringStore/Login'
import { useDispatch, useSelector } from "react-redux";
import {loginSuccess, loginFailure } from '../AllState/ConfiguringStore/Auth/action';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth)
    const handleLogin = ({ email, password }) => {
        if (email === "shiv" && password === "shiv") {
            const action = loginSuccess("User Match - User Is Shivam Singh");
            dispatch(action);
        } else {
            const action = loginFailure("Wrong credentials")
            dispatch(action);
        }
    };

    if (isAuth) {
        return <Redirect to="/" />
    }
    return (
      <div>
        <Login handleLogin={handleLogin} />
      </div>
    );
}

export default LoginPage

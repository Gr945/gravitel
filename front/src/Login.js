import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loginUserSagaAC} from './Redux/ActionCreators'

function Login() {
  const state = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    dispatch(loginUserSagaAC({login, password}));
  };

  state.user._id && history.push("/dashboard");

  return (
    <form className="form" onSubmit={loginUser}>
      <input name="login" placeholder="login" required />
      <input name="password" placeholder="password" required />
      <button className="but" type="submit">
        Войти
      </button>
    </form>
  );
}

export default Login;

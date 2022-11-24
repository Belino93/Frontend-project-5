import "./Login.css";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/apiCalls";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    error: "",
  });



  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    return
  },[])

  

  const clickHandler = (user) => {
    loginUser(user)
      .then((loged) => {
        localStorage.setItem("token", loged.jwt);
        setLoginError((prevState) => ({
          ...prevState,
          error: "",
        }));
        navigate('/')
      })
      .catch((error) =>
        setLoginError((prevState) => ({
          ...prevState,
          error: error.response.data.message,
        }))
      );
  };


  return (
    <div className="login-container">
      <Form className="login-form form-container">
        <Form.Item>
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            className="login-form-button button-login"
            onClick={() => clickHandler(user)}
          >
            Log in
          </Button>
          Or{" "}
          <span
            className="navigator-link"
            onClick={() => navigate("/register")}
          >
            Register now
          </span>
        </Form.Item>
        <div className="login-error">{loginError.error}</div>
      </Form>
    </div>
  );
}

export default Login;

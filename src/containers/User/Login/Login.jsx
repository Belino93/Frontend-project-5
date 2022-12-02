import "./Login.css";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input,  Typography } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/apiCalls";
import { useJwt } from "react-jwt";

function Login() {
  const navigate = useNavigate();
  const tokenjw = localStorage.getItem("token");
  const { decodedToken } = useJwt(tokenjw);
  const { Text, Link } = Typography;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    error: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    return;
  }, []);

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = (user) => {
    loginUser(user)
      .then((loged) => {
        localStorage.setItem("token", loged.jwt);
        setLoginError((prevState) => ({
          ...prevState,
          error: "",
        }));
        navigate("/");
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
      <div className="login-background">
        <div className=" form-container">
          <div className="text-login_container">
            <Text className="text">Login</Text>
            <Text className="text">WELCOME TO</Text>
            <h1>BELINO'S MOVIES</h1>
            <Text className="text" id="text">Login to your account  <br /> and enjoy our exclusive features</Text>
          </div>

          <Form className="login-form_container">
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
                className="login-button"
                onClick={() => clickHandler(user)}
              >
                Log in
              </Button> <br />
              <h6>Or {" "}</h6>
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
      </div>


    </div>
  );
}

export default Login;

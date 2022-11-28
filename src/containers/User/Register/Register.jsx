import { useState, useEffect } from "react";
import "./Register.css";
import { Button, Form, Input } from "antd";
import { registerValidator } from "./registerCheck";
import { createUser } from "../../../services/apiCalls";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    passwordError: "",
    password2Error: "",
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

  const errorHandler = (e) => {
    let error = "";
    error = registerValidator(e.target.name, e.target.value, user.password);

    if (error === undefined) {
      error = "";
    }
    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const send = (user, userError) => {
    if (
      user.name !== "" &&
      userError.nameError === "" &&
      user.surname !== "" &&
      userError.surnameError === "" &&
      user.email !== "" &&
      userError.emailError === "" &&
      user.password !== "" &&
      userError.passwordError === "" &&
      user.password === user.password2 &&
      userError.password2Error === ""
    ) {
      createUser(user)
        .then((created) => console.log(created))
        .catch((error) => {
          setUserError((prevState) => ({
            ...prevState,
            emailError: error.response.data.message,
          }));
        });
    }
  };

  return (
    <div className="register-container">
      <div className="input-error">{userError.nameError}</div>

      <Input
        className="self-input"
        name="name"
        placeholder="Name"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}
      />

      <div className="input-error">{userError.surnameError}</div>

      <Input
        className="self-input"
        name="surname"
        placeholder="Surname"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}
      />

      <div className="input-error">{userError.emailError}</div>

      <Input
        className="self-input"
        name="email"
        placeholder="Email"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}
      />

      <div className="input-error">{userError.passwordError}</div>

      <Input.Password
        className="self-input"
        name="password"
        placeholder="Password"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}
      />

      <div className="input-error">{userError.password2Error}</div>

      <Input.Password
        className="self-input"
        name="password2"
        placeholder="Repeat your password"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}
      />

      <Button type="primary" onClick={() => send(user, userError)}>
        Register
      </Button>
    </div>
  );
}

export default Register;

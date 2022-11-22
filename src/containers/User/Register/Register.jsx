import { useState, useEffect } from "react";
import "./Register.css";
import { Button, Form, Input } from "antd";
import { registerValidator } from "./registerCheck";
import {createUser} from '../../../services/apiCalls'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
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

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const errorHandler = (e) => {
    let error = "";
    error = registerValidator(e.target.id, e.target.value, user.password);
    if (error === undefined) {
      error = "";
    }
    setUserError((prevState) => ({
      ...prevState,
      [e.target.id + "Error"]: error,
    }));
  };

  const send = (user, userError) => {
    if((user.name !== '' && userError.name ==='') && (user.surname !== '' && userError.surname === '') && (user.email !== '' && userError.email === '') && (user.password !== '' && userError.password === '') && (user.password === user.password2 && userError.password2 === '')){
      try {
        const status = createUser(user)
        if(status.message === "Email is already registered: "){
          
        }
        setTimeout(() => {
          navigate('/')
        }, 500) 
        

      } catch (error) {
        throw new Error({'message': 'Register failed'})
      }
      
    }
    
  };

  return (
    <div className="register-container">
      <Form
        className="form-style"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <div className="input-error">{userError.nameError}</div>
        <Form.Item label="Name" name="name">
          <Input
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
          
        </Form.Item>
        
        <div className="input-error">{userError.surnameError}</div>
        <Form.Item label="Surname" name="surname">
          <Input
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        
        <div className="input-error">{userError.emailError}</div>
        <Form.Item label="Email" name="email">
          <Input
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        
        <div className="input-error">{userError.passwordError}</div>

        <Form.Item label="Password" name="password">
          <Input.Password
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <div className="input-error">{userError.password2Error}</div>

        <Form.Item label="Password" name="password2">
          <Input.Password
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" onClick={() => send(user, userError)}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;

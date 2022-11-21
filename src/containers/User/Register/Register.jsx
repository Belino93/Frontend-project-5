import { useState, useEffect } from 'react';
import './Register.css'
import { Button, Form, Input } from 'antd';
import { registerValidator } from './registerCheck';

function Register() {

  const [user, setUser] = useState({
    name:'',
    surname:'',
    email:'',
    password:'',
    password2:'',
  })

  const [userError, setUserError] = useState({
    nameError:'',
    surnameError:'',
    emailError:'',
    passwordError:'',
    password2Error:'',
  })

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const errorHandler = (e) => {
    let error = '';
    error = registerValidator(e.target.id, e.target.value)
    if(error === undefined){
      error = ''
    }
    setUserError((prevState) => ({
      ...prevState,
      [e.target.id + 'Error']: error
    }))
  }

  const send = (user) => {
    console.log(registerValidator(user))
  }

  return (
    <div className="register-container">
      <Form
    className='form-style'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        
      >
        <Input onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}/>
      </Form.Item>
      <div className="input-error">{userError.nameError}</div>
      <Form.Item
        label="Surname"
        name="surname"
        
      >
        <Input onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password2"
        rules={[{ required: true, message: 'Repeat your password!' }]}
      >
        <Input.Password onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e)}/>
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Button type="primary" onClick={() => send(user)}>
          Register
        </Button>
      </Form.Item>

    </Form>
    </div>
  )
}

export default Register
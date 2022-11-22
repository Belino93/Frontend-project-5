import './Login.css'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

function Login() {

  const [user, setUser] = useState({
    email: '',
    password:''
  })

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <div className='login-container'>
      <Form
      name="normal_login"
      className="login-form"
      
    >
      <Form.Item
        name="email"
        
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" 
        onChange={() => {eve}}/>
      </Form.Item>
      <Form.Item
        name="password"
       
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => {}}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Login
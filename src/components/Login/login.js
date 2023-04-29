import React, { useState } from 'react';
import Navbar from '../NavBar/navbar';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div style={{backgroundColor:"white"}}><Navbar/>
    <div className="login" style={{backgroundColor:"white"}}>
      <form onSubmit={handleSubmit} style={{backgroundColor:"white"}}>
        <div className="form-group" style={{backgroundColor:"white"}}>
          <label style={{backgroundColor:"white"}}>Email</label>
          <input style={{backgroundColor:"white"}} type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group" style={{backgroundColor:"white"}}>
          <label style={{backgroundColor:"white"}}>Password</label >
          <input type="password" style={{backgroundColor:"white"}} className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button  type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Login;

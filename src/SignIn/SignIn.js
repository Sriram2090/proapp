

import React, { useState } from 'react';

import Img2 from "../Image/icon2.jpeg"
import Img3 from "../Image/icon3.jpeg"
import './SignIn.css'
import { Navigate,useNavigate } from 'react-router-dom'

const SignIn = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login submitted with:', { email, password });
  
  };
  const Navigate=useNavigate()
const naviSignin =()=>
{
  alert("Login Successfull...........")
  Navigate("/Loader")
}

  return (
    
    <div  className='ready' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundImage:`('./Image/debate.jpg')`}}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', borderRadius: '25px', boxShadow: ' 4px 5px 10px black', height:'450px',background:'transparent',}}>
        <h1 style={{ textAlign: 'center' }}>SIGN IN</h1>
        
        <h5 style={{color:'black'}}>New to debate now? 
        <a href="/" style={{color:'blue'}}>Create one</a>
        </h5>
        
       
        <label type="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '15px', padding: '8px' ,background:'transparent',borderColor:'black',borderRadius:'20px'}}/>
        <label type="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '20px', padding: '8px',background:'transparent',borderColor:'black',borderRadius:'20px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer'  }} onClick={naviSignin}>SIGN IN</button>
        <h4 style={{color:'black',textAlign:'center'}}>or Sign in with</h4>
        
          <center>
          <img src={Img2} style={{width:'30px',borderRadius:'20px',cursor:'pointer', padding:'3px',maxWidth:'100px',marginBottom:'10px'}}></img>
          <img src={Img3} style={{width:'32px',borderRadius:'25px',cursor:'pointer',marginLeft:'8px',marginBottom:'12px',marginTop:'11px'}}></img>
          </center>
          <a href="/Forgot" style={{color:'blue',float:'right'}}>forgot password?</a>
        
      </form>
    </div>
    
  );
};


export default SignIn;

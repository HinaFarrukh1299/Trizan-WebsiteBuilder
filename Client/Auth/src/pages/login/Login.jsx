/*import React from 'react';
import { useState } from 'react' ;
import { Link } from 'react-router-dom';
import axios from 'axios' ;
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate(); // we have to initialize it
const [data,setData] = useState (
  {
    email : '',
    password : ''

  }
)


  const loginUser = async (e) => {
    e.preventDefault();
const{email,password} = data ;// we will first destructure data with email and password
try {

  const {data} = await axios.post('/login',{email,password})
  if(data.error) {
    toast.error(data.error) ;
  }
    else{
      setData({/*we will keep this empty to reset the form to default values*///})
     // navigate('/')
   // }
  

  
//} catch (error) {
 // res.json(error)
/*}
  }
    
  return (
    <div>
    <div>
      <form onSubmit={loginUser}>
      <label> Email </label>
            <input type='email' placeholder='Enter Your Email Address' value={data.email} onChange={(e) => setData ({
              ...data , email : e.target.value
            })} />
            <label> Password </label>
            <input type='password' placeholder='Create a password' value={data.password} onChange={(e) => setData ({...data , password:e.target.value})} />
            <button type='submit'> Login </button>

      </form>
      
    </div>
    <div>
     <h3> Don't have an account with us <Link to='/register'> Create a new account </Link> </h3>
    </div>
    </div>
  );
}
  */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post(
        '/login',
        { email, password },
        { withCredentials: true } // ✅ important for setting cookies
      );

      const result = response.data;

      if (result.error) {
        toast.error(result.error);
      } else {
        setData({ email: '', password: '' });
        toast.success("Login successful!");
        navigate('/dashboard');
      }

    } catch (error) {
      console.log(error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>

      <div>
        <h3>
          Don't have an account? <Link to="/register">Create a new account</Link>
        </h3>
      </div>
    </div>
  );
}



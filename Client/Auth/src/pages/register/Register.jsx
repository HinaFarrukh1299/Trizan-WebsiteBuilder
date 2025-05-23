import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate(); // invoke useNavigate to navigate to a new page
    // set the useState for the function
    const [data,setData] = useState ({
        name:'' ,
        email:'' ,
        password:''
    })

    // we will create an arrow function that will take an (e) event property
   const registerUser = async (e) => {

        e.preventDefault();// we don't want the page to automatically load
        const {name,email,password} = data

        try {
            const {data} =await axios.post('/register',{name,email,password})
            if(data.error) {
                toast.error(data.error)
            }
            else{
                setData({ /*will keep it as an empty object and reset this to empty fields */})
                toast.success("you've successfully registered :) , Welcome!" , {
                    duration: 5000 // duration in milliseconds (this is 5 seconds)
                  });
                navigate('/login');

            }
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
        <form onSubmit={registerUser}>
            <label> Name </label>
            <input type='text' placeholder='Enter Your Name' value={data.name} onChange={(e) => setData({...data , name: e.target.value}) }/> 
            <label> Email </label>
            <input type='email' placeholder='Enter Your Email Address' value={data.email} onChange={(e) => setData({...data , email: e.target.value}) }/>
            <label> Password </label>
            <input type='password' placeholder='Create a password' value={data.password} onChange={(e) => setData({...data , password: e.target.value}) }/>
            <button type='submit'> Submit </button>
        </form>
        <div>
            <h3> Already a member ? <Link to='/login' > Login </Link> </h3>
        </div>
      
    </div>
  );
}

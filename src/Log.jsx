// import React from "react";

// function Log(){
//     return(
//         <div>
//             Login
//         </div>
//     )
// }
// export default Log;
import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Log(){
 
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/Log',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
               navigate('/home')
            }
        })
        .catch(err=>console.log(err))
    }
//     .then(result => {
//         console.log('Login Result:', result);
//         if (result.data === 'Success') {
//           console.log('Login successful. Navigating to Home...');
//           navigate('/Home');
//         } else {
//           console.log('Login failed. Invalid credentials.');
//         }
//       })
//       .catch(err => {
//         console.error('Error during login:', err);
//       });
//   };
    return(
        <div className='login'>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=>setEmail(e.target.value)}

                        />

                    </div>
                   
                    <div className="mb-3">
                        <label htmlFor="password">
                        <strong>Password</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=>setPassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    </form>

                    <p>Don't have an Account</p>
                    <Link to="/register" className="btn btn-success w-100 rounded-0 text-decoration-none">
                        Sign Up
                    </Link>
            
            </div>
        </div>
        </div>
    )
}

export default Log;

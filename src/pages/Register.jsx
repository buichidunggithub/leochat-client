import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/leochat-logo.png";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { registerRoute } from '../utils/APIRoutes';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleButton } from 'react-google-button';

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: '',
    password: "",
    confirmPassword: '',
  });

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if( handleValidation()){
    const {password,  username, email} = values;
    const {data} = await axios.post(registerRoute, {
      username,
      email,
      password,
    });
    if(data.status === false){
      toast.error(data.msg, toastOptions);
    } else {
      localStorage.setItem('chat-app-user', JSON.stringify(data.user));
    }
    navigate("/");
   };
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/chat');
    }
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const {password, confirmPassword, username, email} = values;
    if(password!==confirmPassword){
      toast.error("Enter correct Confirm Password!", toastOptions);
      return false;
    } else if(username.length < 3){
      toast.error("Username must be atleast 3 characters.", toastOptions);
      return false;
    } else if(password.length < 4){
      toast.error("Password must be atleast 4 characters.", toastOptions);
      return false;
    } else  if(email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  }

  // const handleSignUpWithGoogle = async () => {
  //   try {
  //     await googleSignIn();
  //     const email = user.email;
  //     const password = user.uid;
  //     const username = email.split('@')[0];

  //     const { data } = await axios.post(registerRoute, {
  //       username,
  //       email,
  //       password,
  //     });
  //     if (data.status === false){
  //       toast.error(data.msg, toastOptions);
  //     } else {
  //       localStorage.setItem('chat-app-user', JSON.stringify(data.user));
  //     }
  //     navigate("/");

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Make it simple!</h1>
          </div>
          <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} />
          <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
          <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
          <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} />
          <button type='submit' >Create User</button>
          <div className="thid-signin">
              <GoogleButton onClick={{}}/>
          </div>
          <span>Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 10rem;
    }
    h1 {
      color: white;
      text-transform: capitalize;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #3d12b3;
    }
  }
  span {
    display: flex;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
  .login-button {
    cursor: pointer;
    color: white;
    padding: 12px;
    border-radius: 8px;
    display: inline-block;
  }
  .facebook {
    background-color: #3b5998;
  }
  
  .google {
    background-color: #4285f4;
    color: white;
  }

  .thid-signin {
    display: flex;
    justify-content: center;
  }
`;
export default Register
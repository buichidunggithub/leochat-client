import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/leochat-logo.png";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { checkUserExist, loginRoute, registerRoute } from '../utils/APIRoutes';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleButton } from 'react-google-button';
import { auth } from '../firebase';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const Login = () => {
  
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/chat');
    }
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (handleValidation()){
    const {password, username} = values;
    const {data} = await axios.post(loginRoute, {
      username,
      password
    });
    if(data.status === false){
      toast.error(data.msg, toastOptions);
    } else {
      localStorage.setItem('chat-app-user', JSON.stringify(data.user));
    }
    navigate('/chat');
   };
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const {password, username} = values;
    if(password ===  ""){
      toast.error("Password required!", toastOptions);
      return false;
    } else if(username.length === ""){
      toast.error("Username required", toastOptions);
      return false;
    } 
    return true;
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then(async (result) => {
        const user = result.user;
        if (user){
          const username = user.email.split('@')[0];
          const password = user.uid;
          const email = user.email;
          const existedUser = await axios.post(checkUserExist, {
            email
          });
          if (!existedUser.data.status) await axios.post(registerRoute, {
            username,
            email,
            password
          });
          
          setValues({
            username,
            password
          })
          const {data} = await axios.post(loginRoute, {
            username,
            password
          });
  
          if(data.status === false){
            toast.error(data.msg, toastOptions);
          } else {
            localStorage.setItem('chat-app-user', JSON.stringify(data.user));
          }
          navigate('/chat');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Make it simple!</h1>
          </div>
          <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} min="3"/>
          <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
          <button type='submit' >Login</button>
          <span>
            Don't  have an account? &nbsp;
            <Link to="/register">Register</Link>
          </span>
          <div className="thid-signin">
              <GoogleButton onClick={handleGoogleSignIn}/>
          </div>
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
  .thid-signin {
    display: flex;
    justify-content: center;
  }
`;
export default Login
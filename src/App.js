import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chats from "./pages/Chats";
import SetAvatar from './pages/SetAvatar';
import MainSite from "./pages/MainSite";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainSite/> } />
          <Route path='/register' element={ <Register /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/setAvatar' element={ <SetAvatar /> }/>
          <Route path='/chat' element={ <Chats/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/services' element={ <Services/> }/>
          <Route path='/contact-us' element={ <Contact/> }/>
        </Routes>
      </BrowserRouter>
  )
}

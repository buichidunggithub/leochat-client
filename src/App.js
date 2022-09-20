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
import MainSite from "../src/components/MainSite"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainSite/> } />
          <Route path='/register' element={ <Register /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/setAvatar' element={ <SetAvatar /> }/>
          <Route path='/chat' element={ <Chats/> }/>
        </Routes>
      </BrowserRouter>
  )
}

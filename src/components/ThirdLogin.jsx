import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import LoginGGFB from "./LoginGoogleFacebook"

function ThirdLogin() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      {/* <BrowserRouter> */}
        <AuthProvider>
          <Routes>
            <Route path="/" component={LoginGGFB} />
          </Routes>
        </AuthProvider>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default ThirdLogin

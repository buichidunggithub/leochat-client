import React from "react";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { auth } from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const LoginGGFB = () => {
    return (
        <>
            <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                <GoogleOutlined /> Sign in with Google
            </div>
          {/* <br/><br/> */}
            <div className="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                <FacebookOutlined /> Sign in with Facebook
            </div>
        </>
    )
}

export default LoginGGFB;
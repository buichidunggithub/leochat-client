import React, { useState, useEffect } from "react";
import Logo from './leochat-logo.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import Logout from "../Logout";

export default function Navbar({ currentUser }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    useEffect(() => {
        if (currentUser) {
            setCurrentUserName(currentUser.username);
        }
        console.log('currentUserName', currentUserName);
    }, [currentUser]);
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h3>Make it simple!</h3>
                    </div>
                </NavLink>
                <Bars/>
                { currentUserName ?
                    <div className="current-user">
                        <h2>{currentUserName}</h2>
                        <div className="logout-button">
                            <Logout />
                        </div>
                    </div> : 
                    <NavMenu>
                        <NavLink to="/about" >
                        About
                        </NavLink>
                        <NavLink to="/services">
                            Services
                        </NavLink>
                        <NavLink to="/contact-us">
                            Contact us
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink to="/register">Sign Up</NavBtnLink>
                        </NavBtn><NavBtn>
                            <NavBtnLink to="/login">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                }
            </Nav>
        </>
    );
};
import React from "react";
import Logo from './leochat-logo.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
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
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact us
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/register">Sign Up</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
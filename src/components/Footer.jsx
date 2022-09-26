import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
  
const Footer = () => {
  return (
    <>
      <Container>
        <Box>
            <div className="item about">
                <h3>About</h3>
            </div>
            <div className="item service">
                <h3>Service</h3>
            </div>
            <div className="item contact">
                <h3>Contact</h3>
            </div>
            <div className="item start">
                <h3>Start</h3>
                <div className="link">
                    <Link to="/login">Sign In</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </Box>
      </Container>
    </>
  );
};
export default Footer;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    height: 80px;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 8);
    z-index: 10;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-around;
    color: #fff;
    .link {
        display: grid;
        padding: 5px;
    }
`;
   
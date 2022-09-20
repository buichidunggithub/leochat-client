import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainSite = () => {
    return (
        <>
            <Navbar/>
            <StyledPage>
                <motion.div
                initial={{ y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 1 }}
                >
                Welcome
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                >
                    .
                </motion.span>
                </motion.div>
                <motion.div
                className="buttons"
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                >
                </motion.div>
            </StyledPage>
        </>
    );
};

export default MainSite;

const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

const StyledPage = styled(motion.div)`
  height: calc(90vh - 50px);
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 4em;

  & > div > span {
    color: red;
    opacity: 0;
  }

  .buttons {
    color: white;
  }

  & > div {
    opacity: 0;
    color: white;
  }

  .buttons > button {
    border: 0px;
    width: 80px;
    height: 30px;
    margin: 20px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    transition: 0.5s;
  }
  .buttons > button:hover {
    color: red;
  }

  .buttons > button:focus {
    outline: none;
    user-select: none;
  }
`;
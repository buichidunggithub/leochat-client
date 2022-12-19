import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainSite = () => {
    return (
        <>
            <Box>
              <Navbar/>
              <StyledPage>
                  <motion.div
                  initial={{ y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 1 }}
                  >
                  About
                  </motion.div>
                  <motion.div
                  className="buttons"
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  >
                  </motion.div>
              </StyledPage>
            </Box>
        </>
    );
};

export default MainSite;

const Box = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const StyledPage = styled(motion.div)`
  height: calc(100vh - 80px);
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: xxx-large;

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
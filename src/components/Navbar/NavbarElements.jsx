import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 8);
    z-index: 10;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
          height: 5rem;
        }
        h1 {
          color: white;
          text-transform: capitalize;
        }
    }
    .current-user {
        display: flex;
        align-items: center;
        h2 {
            color: #15cdfc;
        }
        .logout-button {
            padding-left: 10px;
        }
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background #fff;
        color: #010606;
    }
`
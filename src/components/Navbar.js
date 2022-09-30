import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items; center;
    height: 60px;
    font-size: 14px;
`;
const LeftLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const RightLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavLinks = styled(Link)`
    padding: 0 8px;
    text-decoration: none;
    color: ${link =>
        link.className == "rightlinks" ? "rgba(0, 0, 0, 0.75)" : "#000"};

    svg {
        height: 24px;
        width: 24px;
        color: #5f6368;
        fill: currentColor;
    }
`;

const LoginLink = styled.div`
    text-decoration: none;
    cursor: pointer;
    color: white;
    padding: 0.7rem 0.4rem;
    background: #1a73e8;
    min-width: 80px;
    margin-left: 8px;
    border: 1px solid transparent;
    text-align: center;

    font-family: Open Sans, Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 16px;
    margin-right: 8px;
    vertical-align: middle;
    border-radius: 4px;
`;

function Navbar() {
    return (
        <Nav>
            <LeftLinks>
                <NavLinks to="/about">About</NavLinks>
                <NavLinks to="/store">Store</NavLinks>
            </LeftLinks>
            <RightLinks>
                <NavLinks className="rightlinks" to="/gmail">
                    Gmail
                </NavLinks>
                <NavLinks className="rightlinks" to="/images">
                    Images
                </NavLinks>
                <NavLinks to="/">
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </svg>
                </NavLinks>
                <LoginLink className="signin" to="/">
                    Sign in
                </LoginLink>
            </RightLinks>
        </Nav>
    );
}

export default Navbar;

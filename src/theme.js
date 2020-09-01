import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    text-align: left;
  }

  #app {
    overflow: visible;
  }

  a {
    text-decoration: none;
    transition: all 0.1s linear;
    /* border-bottom: 2px solid rgba(0,0,0,0); */
  }

  a:hover {
    text-decoration: none;
  }

  body {
    background: #ffffff;
    color: #606060;
    margin: 0;
    padding: 0px;
    font-family: "Montserrat", sans-serif;
    
  }
  
  p {
    font-size: 16px;
    font-weight: 500;
  }

  h1 {
    font-size: 37px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  
  `;

export const TopBar = styled.div`
  background: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  h1,
  p {
    color: #606060;
    font-size: 12px;
    font-weight: 600;
    padding: 10px;
    margin: 0;
  }
`;

export const Button = styled.div`
  background: none;
  border: none;
  font-size: 25px;
  display: inline;
  padding-left: 10px;
  padding-right: 5px;
  opacity: 1;
  cursor: pointer;
  :hover {
    color: #4179bb;
  }
`;

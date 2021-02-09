import React from "react";
import BlueBack from "../images/blue.jpeg";
import Sticks from "../images/sticks.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Bar>
      <Banner>
        <img src={Sticks} alt="Sticks" />
      </Banner>
      <Navigation>
        <ul>
          <li>
            <NavButton>
              <Link to="/">home</Link>
            </NavButton>
          </li>
          <li>
            <NavButton>
              <Link to="/projects">projects</Link>
            </NavButton>
          </li>
          <li>
            <NavButton>
              <Link to="/">contact</Link>
            </NavButton>
          </li>
        </ul>
      </Navigation>
    </Bar>
  );
};

const Bar = styled.div`
  display: block;
  position: sticky;
  z-index: 100;
`;

const Banner = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 100px;
  background: blue;
  display: flex;
  z-index: 1;
  box-shadow: 0px 0px 15px #000000;
  img {
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Navigation = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  ul {
    padding-inline-start: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      padding: 1rem 3rem;
      font-size: 1.5rem;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #1c488b;
        :hover {
          color: white;
        }
      }
    }
  }
`;

const NavButton = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  color: #1c488b;
  :hover {
    background-image: url(${BlueBack});
    cursor: pointer;
  }
`;

export default NavBar;

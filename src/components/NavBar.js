import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BlueBack from "../images/blue.jpeg";

const NavBar = ({ setNavPosition }) => {
  return (
    <Bar>
      <Navigation>
        <ul>
          <li>
            <NavButton>
              <Link to="/" onClick={() => setNavPosition(0)}>
                home
              </Link>
            </NavButton>
          </li>
          <li>
            <NavButton>
              <Link to="/projects" onClick={() => setNavPosition(-400)}>
                projects
              </Link>
            </NavButton>
          </li>
        </ul>
      </Navigation>
    </Bar>
  );
};

const Bar = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Navigation = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    li {
      padding: 0rem 2rem;
      list-style-type: none;
    }
  }
`;

const NavButton = styled.div`
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  a {
    font-size: 1.3rem;
    font-weight: bold;
    display: block;
    padding: 0.25rem 1rem;
    color: #1c488b;
    text-decoration: none;
  }
  :hover {
    background-image: url(${BlueBack});
    cursor: pointer;
    a {
      color: white;
    }
  }
`;

export default NavBar;

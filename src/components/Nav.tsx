import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
require("components/icons/tags.svg"); // svgo-loader => svg-sprite-loader
require("components/icons/money.svg");
require("components/icons/statistics.svg");

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px p;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          {/* <img src={x} alt="" /> */}
          <svg fill="green" className="icon">
            <use xlinkHref="#tags" />
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg fill="green" className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg fill="green" className="icon">
            <use xlinkHref="#statistics" />
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;

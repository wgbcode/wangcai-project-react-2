import styled from "styled-components";

const CategorySection = styled.section`
  font-size: 24px;
  color: #000000;
  background: #c4c4c4;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      padding: 21px 70px;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: black;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;

export default CategorySection;

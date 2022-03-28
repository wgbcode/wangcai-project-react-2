import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const categoryMap = { "-": "支出", "+": "收入" };
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const [category, setCategory] = useState("-");
  return (
    <Wrapper>
      <ul>
        {/* c 已声明是字符串，不用再加 "" */}
        {categoryList.map((c) => (
          <li
            onClick={() => setCategory(c)}
            className={category === c ? "selected" : ""}
            key={c}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;

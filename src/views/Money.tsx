import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 2.5px 18px;
      font-size: 16px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 7px;
  }
`;
const NotesSection = styled.section`
  font-size: 14px;
  padding: 10px 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 70px;
      background: #f5f5f5;
      border: none;
    }
  }
`;
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
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;
const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: white;
    font-size: 36px;
    color: #333333;
    padding: 26px 16px 24px 0px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    font-size: 18px;
    color: #000000;
    > button {
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #a9a9a9;
      }
      &:nth-child(14) {
        background: #b8b8b8;
      }
    }
  }
`;

export default function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这是添加备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberSection>
    </MyLayout>
  );
}

import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 14px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
  }
  > input {
    display: block;
    width: 100%;
    height: 70px;
    background: #f5f5f5;
    border: none;
  }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <Label>
      <span>备注</span>
      <input {...rest}/>
    </Label>
  );
};

export default Input;

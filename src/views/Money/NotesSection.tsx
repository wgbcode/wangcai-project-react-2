import styled from "styled-components";

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

export default NotesSection;

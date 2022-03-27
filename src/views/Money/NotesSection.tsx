import { setUncaughtExceptionCaptureCallback } from "process";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

// 受控组件
const NotesSection: React.FunctionComponent = () => {
  const [note, setNote] = useState("");
  console.log(note);
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这是添加备注"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
    </Wrapper>
  );
};

// 非受控组件 defaultValue
// const NotesSection: React.FunctionComponent = () => {
//   const [note, setNote] = useState("");
//   const refInput = useRef<HTMLInputElement>(null);
//   const x = () => {
//     if (refInput.current !== null) {
//       setNote(refInput.current.value);
//     }
//   };
//   return (
//     <Wrapper>
//       <label>
//         <span>备注</span>
//         <input
//           type="text"
//           placeholder="在这是添加备注"
//           defaultValue={note}
//           ref={refInput}
//           onBlur={x}
//         />
//       </label>
//     </Wrapper>
//   );
// };

export default NotesSection;

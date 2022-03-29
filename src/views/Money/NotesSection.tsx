import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 14px;
  padding: 10px 16px;
  > label {
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
  }
`;

// 受控组件
// const NotesSection: React.FunctionComponent = () => {
//   const [note, setNote] = useState("");
//   console.log(note);
//   return (
//     <Wrapper>
//       <label>
//         <span>备注</span>
//         <input
//           type="text"
//           placeholder="在这是添加备注"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//         />
//       </label>
//     </Wrapper>
//   );
// };

// 非受控组件 defaultValue

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NotesSection: React.FunctionComponent<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  console.log(note);
  const x = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这是添加备注"
          defaultValue={note}
          ref={refInput}
          onBlur={x}
        />
      </label>
    </Wrapper>
  );
};

export default NotesSection;

import React, { useState } from "react";
import generateOutput from "./NumberSection/generateOutput";
import Wrapper from "./NumberSection/Wrapper";

const NumberSection: React.FC = () => {
  const [output, _setOutput] = useState("0");
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output.slice(0, 16);
    } else {
      _setOutput(output);
    }
  };
  const X = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === "OK") {
      // some code
      return;
    }
    if ("0123456789.".split("").concat(["删除", "清空"]).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={X}>
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
    </Wrapper>
  );
};

export default NumberSection;

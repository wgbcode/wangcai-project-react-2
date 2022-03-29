import styled from "styled-components";
import React from "react";
import useTags from "useTag";

const Wrapper = styled.section`
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
      &.selected {
        background: #f60;
      }
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

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为？");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter((t) => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) =>
    selectedTags.indexOf(tag) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      {" "}
      <ol>
        {tags.map((tag) => (
          <li
            onClick={() => onToggleTag(tag)}
            className={getClass(tag)}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagsSection;

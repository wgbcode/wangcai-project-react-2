import styled from "styled-components";
import React from "react";
import useTags from "useTag";
import createId from "lib/createId";

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
`;

const Button = styled.button`
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 7px;
  `

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为？");
    if (tagName !== null) {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      {" "}
      <ol>
        {tags.map((tag) => (
          <li
            onClick={() => onToggleTag(tag.id)}
            className={getClass(tag.id)}
            key={tag.id}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <Button onClick={onAddTag}>新增标签</Button>
    </Wrapper>
  );
};

export default TagsSection;

import createId from "lib/createId";
import { useState } from "react";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];

// 封装一个自定义 Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0];
  };
  return { tags, setTags, findTag };
};

export default useTags;

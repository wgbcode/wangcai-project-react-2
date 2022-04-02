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
  const findTagIndex = (id: number) => {
    let index = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  const updateTag = (id: number, obj: { name: string }) => {
    let cloneTags = JSON.parse(JSON.stringify(tags));
    const index = findTagIndex(id);

    cloneTags.splice(index, 1, { id, name: obj.name });
    setTags(cloneTags);
  };
  return { tags, setTags, findTag, findTagIndex, updateTag };
};

export default useTags;

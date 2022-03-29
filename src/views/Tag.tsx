import React from "react";
import { useParams } from "react-router-dom";
import useTags from "useTag";

type Param = {
  id: string;
};
const Tag: React.FC = () => {
  const { findTags } = useTags();
  let { id } = useParams<Param>();
  let tag = findTags(parseInt(id));
  return <div>{tag.name}</div>;
};

export default Tag;

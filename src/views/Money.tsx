import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CategorySection from "./Money/CategorySection";
import NotesSection from "./Money/NotesSection";
import NumberSection from "./Money/NumberSection";
import TagsSection from "./Money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });
  const onChange = (obj: Partial<typeof selected>) => {
    // Partial 可选择 selected 的部分类型
    setSelected({ ...selected, ...obj });
  };
  return (
    <MyLayout>
      {selected.tagIds.join(",")}
      <hr />
      {selected.note}
      <hr />
      {selected.category}
      <hr />
      {selected.amount}
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NotesSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={() => {}}
      />
    </MyLayout>
  );
}

export default Money;

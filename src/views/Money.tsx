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
    tags: [] as string[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };
  return (
    <MyLayout>
      {selected.tags.join(",")}
      <hr />
      {selected.note}
      <hr />
      {selected.category}
      <hr />
      {selected.amount}
      <TagsSection
        value={selected.tags}
        onChange={(tags) => onChange({ tags })}
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

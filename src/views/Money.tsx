import useRecords from "components/hooks/useRecords";
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

const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};
type Category = "-" | "+";
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    // Partial 可选择 selected 的部分类型
    setSelected({ ...selected, ...obj });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout>
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
        onOK={submit}
      />
    </MyLayout>
  );
}

export default Money;

import useRecords from "components/hooks/useRecords";
import useTags from "components/hooks/useTag";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CategorySection from "./Money/CategorySection";
import day from "dayjs"

const CategoryWrapper = styled.div`
  background: white;
`;

function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      <div>
        {records.map((r) => {
          return (
            <div>
              <span>{getName(r.tagIds[0])}</span>
              <hr />
              <span>{r.amount}</span>
              <hr />
              <span>{day(r.createdAt).format('YYYY年MM月DD日')}</span>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Statistics;


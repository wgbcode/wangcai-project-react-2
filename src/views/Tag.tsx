import Button from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useTags from "useTag";

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

type Param = {
  id: string;
};
const Tag: React.FC = (props) => {
  const { findTag } = useTags();
  let { id } = useParams<Param>();
  let tag = findTag(parseInt(id));
  return (
    <Layout>
      <TopBar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <div>
        {" "}
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export default Tag;

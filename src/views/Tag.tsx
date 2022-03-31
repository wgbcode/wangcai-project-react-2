import Button from "components/Button";
import Icon from "components/Icon";
import Input from "components/Input";
import Layout from "components/Layout";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useTags from "useTag";
import Center from "components/Center";
import Span from "components/Span";

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  margin-top: 8px;
  padding: 14px;
  input {
    height: 44px;
  }
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
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}/>
      </InputWrapper>
      <Center>
        <Span />
        <Span />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export default Tag;

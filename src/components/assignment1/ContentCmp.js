import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled.h1`
  text-transform: capitalize;
  margin-bottom: 42px;
`;

const ChildWrapper = styled.div``;

const ContentCmp = ({ title, children }) => {
  return (
    <ContentBox>
      <BoxTitle>{title}</BoxTitle>
      <ChildWrapper>{children}</ChildWrapper>
    </ContentBox>
  );
};

export default ContentCmp;

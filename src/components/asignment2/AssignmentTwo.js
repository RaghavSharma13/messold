import React from "react";
import styled from "styled-components";
import Main from "./Main";
import Sidebar from "./Sidebar";

const AssignmentTwoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  gap: 50px;
`;

const AssignmentTwo = () => {
  return (
    <AssignmentTwoWrapper>
      <Main />
      <Sidebar />
    </AssignmentTwoWrapper>
  );
};

export default AssignmentTwo;

import React from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  border-left: 2px solid black;
  height: fit-content;
  padding: 0px 15px;
`;
const SidebarTitle = styled.h3`
  width: min-content;
`;
const SidebarList = styled.ul`
  list-style: none;
`;
const SidebarListItem = styled.li`
  border: 1px solid #b3aa92;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  margin-block: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 250ms ease;

  &:hover {
    border-color: black;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle>The Five Pillars</SidebarTitle>
      <SidebarList>
        <SidebarListItem>1</SidebarListItem>
        <SidebarListItem>2</SidebarListItem>
        <SidebarListItem>3</SidebarListItem>
        <SidebarListItem>4</SidebarListItem>
        <SidebarListItem>5</SidebarListItem>
      </SidebarList>
    </SidebarWrapper>
  );
};

export default Sidebar;

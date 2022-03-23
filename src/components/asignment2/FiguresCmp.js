import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const FigureWrapper = styled.div`
  width: min-content;
  ${(props) =>
    props.shiftRight &&
    css`
      margin-right: 4rem;
    `}
`;

const Figure = styled.h1`
  font-size: 5rem;
  color: #b3aa92;
  margin-bottom: 40px;
  font-weight: normal;
  text-align: center;
`;

const Caption = styled.p`
  text-align: center;
  ${(props) =>
    props.setWidth &&
    css`
      width: ${props.setWidth};
    `}
`;

const FiguresCmp = ({ amount, caption, setWidth, ...rest }) => {
  return (
    <FigureWrapper {...rest}>
      <Figure>{amount.toLocaleString()}</Figure>
      <Caption setWidth={setWidth}>{caption}</Caption>
    </FigureWrapper>
  );
};

export default FiguresCmp;

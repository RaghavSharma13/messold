import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

const WeightClassifier = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Label = styled.p`
  color: ${(props) => (props.highlight === true ? "black" : "lightgray")};
  margin-top: 12px;
  transition: color 250ms ease;
`;

const HorizontalLine = styled.hr`
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 3px;
  background-color: grey;
`;

const WeightBubble = styled.div`
  height: ${(props) => (props.size === "main" ? "15px" : "10px")};
  width: ${(props) => (props.size === "main" ? "15px" : "10px")};
  background-color: ${(props) =>
    props.selected === true ? "#b3aa92" : "black"};
  border-radius: 50%;

  ${(props) =>
    props.selected === true &&
    css`
      box-shadow: 0px 0px 0px 2px #b3aa92;
    `};
  cursor: pointer;

  transition: box-shadow, background-color, 250ms linear;
`;

const LabelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const WeightClassifierCmp = () => {
  const [weights, setWeights] = useState([false, false, true, false, false]);
  const [selected, setSelected] = useState(2);

  const updateSelectedWeight = (index) => {
    const updatedWeights = weights;
    updatedWeights[selected] = false;
    updatedWeights[index] = true;

    setWeights(updatedWeights);
    setSelected(index);
  };

  return (
    <WeightClassifier>
      <Selector>
        {weights.map((weight, index) => (
          <WeightBubble
            key={index}
            size={index % 2 === 0 ? "main" : "sub"}
            selected={index === selected}
            onClick={() => updateSelectedWeight(index)}
          />
        ))}
        <HorizontalLine />
      </Selector>
      <LabelWrapper>
        <Label highlight={selected === 0 || selected === 1}>Light</Label>
        <Label highlight={selected === 1 || selected === 2 || selected === 3}>
          Medium
        </Label>
        <Label highlight={selected === 3 || selected === 4}>Heavy</Label>
      </LabelWrapper>
    </WeightClassifier>
  );
};

export default WeightClassifierCmp;

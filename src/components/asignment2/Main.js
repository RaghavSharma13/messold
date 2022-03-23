import React from "react";
import styled from "styled-components";
import FiguresCmp from "./FiguresCmp";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  flex: 1;
`;

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "vertical" ? "column" : "row"};
  justify-content: space-around;
  align-items: center;
`;

const ContentHeader = styled.h3``;

const ContentBody = styled.div``;

const ContentText = styled.p`
  margin-top: 20px;
  max-width: 40ch;
`;

const ContentBox = styled.div`
  align-self: flex-start;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Section>
        <FiguresCmp
          amount={"8.4M"}
          caption={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet explicabo ut molestiae vero eos ratione sapiente, eveniet illum corrupti possimus."
          }
        />
        <FiguresCmp
          amount={"7.9M"}
          caption={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet explicabo ut molestiae vero eos ratione sapiente, eveniet illum corrupti possimus."
          }
        />
      </Section>
      <Section>
        <FiguresCmp
          shiftRight
          amount={"33.6M"}
          caption={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet explicabo ut molestiae vero eos ratione sapiente, eveniet illum corrupti possimus."
          }
        />
      </Section>
      <Section>
        <ContentBox>
          <ContentHeader>Our Footprint</ContentHeader>
          <ContentBody>
            <ContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              blanditiis veniam reiciendis in maiores atque ea doloribus labore?
              Repellat fugiat quas blanditiis? Similique dolore magni accusamus
              dolorum ea iusto veritatis rerum. Veniam et dolores eveniet
              doloremque, quo beatae mollitia, atque impedit ducimus pariatur
              fugit laborum quia magnam reprehenderit nulla a!
            </ContentText>
            <ContentText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              eius perspiciatis reiciendis ullam alias. Autem, maxime mollitia
              qui, beatae iusto eligendi odio delectus voluptatibus laborum ex
              ea dolores aspernatur eum quam itaque. Aliquid, veritatis eum
              accusantium obcaecati reiciendis possimus voluptate.
            </ContentText>
            <ContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              architecto dolorum quaerat dignissimos hic accusamus. Excepturi
              rem, debitis consequuntur amet perspiciatis omnis deleniti quos
              aperiam aliquid repellendus impedit quaerat temporibus, officiis,
              velit magni nobis nisi quidem eaque dolore culpa. Odit labore
              quisquam perferendis possimus, dolor ratione repudiandae ullam
              voluptas provident!
            </ContentText>
          </ContentBody>
        </ContentBox>
        <Section orientation={"vertical"}>
          <FiguresCmp
            setWidth={"max-content"}
            amount={8679}
            caption={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
            }
          />
          <FiguresCmp
            setWidth={"max-content"}
            amount={373.73}
            caption={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            }
          />
        </Section>
      </Section>
    </MainWrapper>
  );
};

export default Main;

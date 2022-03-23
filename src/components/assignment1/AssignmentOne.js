import React from "react";
import styled from "styled-components";
import ContentCmp from "./ContentCmp";
import WeightClassifierCmp from "./WeightClassifierCmp";

const AssignmentOneWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  padding: 60px;
  gap: 60px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Content = styled.p`
  font-size: 18px;
`;

const SpecificationsList = styled.ul``;

const SpecificationsListItem = styled.li`
  list-style: disc;
  list-style-position: inside;
`;

const AssignmentOne = () => {
  return (
    <AssignmentOneWrapper>
      <Section>
        <ContentCmp title={"Description"}>
          <Content>
            There's one simple reason we call this our everyday oxford; we wear
            them pretty much every single day.
          </Content>
        </ContentCmp>

        <ContentCmp title={"Material"}>
          <Content>
            Just the right amount of sturdy for year round wear.Soft to the
            touch but build for a decade of solid wear.Oxford is perfectly
            versatile fabric that looks just as good pressed as it does pulled
            off the back of a chair. White the traditional cotton uses 25
            percent of the world's pesticides, our organic cotton doesn't use a
            drop. A better shirt, responsibly built for the long haul.
          </Content>
        </ContentCmp>

        <ContentCmp title={"Garment Weight"}>
          <Content>
            Your daily driver. Burlier than the average button up.
          </Content>
          <WeightClassifierCmp />
        </ContentCmp>
      </Section>

      <Section>
        <ContentCmp title={"Specifications"}>
          <SpecificationsList>
            <SpecificationsListItem>
              100% organic cotton.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Made from our burly rugby oxford.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Our signature Jack button down collar.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Single rounded chest pocket.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Double-needle felled construction throughout.
            </SpecificationsListItem>
            <SpecificationsListItem>Natural buttons.</SpecificationsListItem>
            <SpecificationsListItem>
              Lock-stitched buttons and buttonholes.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Shorter length to be worn untucked.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Tailored fit and high armhole.
            </SpecificationsListItem>
            <SpecificationsListItem>
              No pleats for easy ironing and clean lines.
            </SpecificationsListItem>
            <SpecificationsListItem>
              Wash cold and tumble dry low.
            </SpecificationsListItem>
            <SpecificationsListItem>Made in China.</SpecificationsListItem>
          </SpecificationsList>
        </ContentCmp>
      </Section>

      <Section>
        <ContentCmp title={"Essentials"}>
          <Content>
            This product is a Taylor Stitch Essential that we aim to always keep
            in stock. Essentials are our tried and true products that we wear
            damn near everyday. If your size is currently out-of-stock, please
            submit your email address to the "Notify Me" tab. We restock
            Essentials regularly. In stock sizes are available for immediate
            shipping.
          </Content>
        </ContentCmp>
      </Section>
    </AssignmentOneWrapper>
  );
};

export default AssignmentOne;

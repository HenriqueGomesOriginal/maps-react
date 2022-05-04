import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  display: grid;
  grid-template-areas:
    "aside"
    "content";
  gap: 20px;

  grid-template-columns: 20fr 50fr;
`;

export const Content = styled.div`
  grid-area: "content";
`;

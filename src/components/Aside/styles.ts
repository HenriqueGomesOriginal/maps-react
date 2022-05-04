import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  grid-area: "aside";
  min-height: 100vh;

  background-color: ${(props) => props.theme.colors.deepSpace};
  opacity: 0.7;

  .content-div {
    color: ${(props) => props.theme.colors.white};
  }

  //margin: ${(props) => props.theme.spacing.nano}
`;

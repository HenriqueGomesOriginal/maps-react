import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;

  .background-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    z-index: -1;
  }
`;

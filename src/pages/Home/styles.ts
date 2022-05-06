import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;
  margin: ${(props) => props.theme.spacing.xxs};
  color: ${(props) => props.theme.colors.deepSpace};


  .content-div {
    transition: 1s;

    margin-top: ${(props) => props.theme.spacing.sm};

    h2 {
      font-size: ${(props) => props.theme.fontSize.xs};

      margin-top: ${(props) => props.theme.spacing.xxxs};
    }
  }

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

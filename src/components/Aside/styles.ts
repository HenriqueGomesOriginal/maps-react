import styled from "styled-components";

export const Container = styled.div`
  width: 25%;

  min-height: 100vh;

  background-color: ${(props) => props.theme.colors.deepSpace};

  .content-div {
    position: relative;

    color: ${(props) => props.theme.colors.white};
    margin: ${(props) => props.theme.spacing.xxs};

    .description-h2 {
      margin-top: ${(props) => props.theme.spacing.xxs};
    }

    .address-p {
      margin-top: ${(props) => props.theme.spacing.xxs};
    }

    .address-input {
      margin-top: ${(props) => props.theme.spacing.xxxs};
      border-radius: ${(props) => props.theme.borderRadius.xs};

      padding: 6px;
      width: 100%;
    }

    .more-button {
      float: left;
      margin-top: ${(props) => props.theme.spacing.xxxs};
      padding: 8px;

      border: none;
      border-radius: ${(props) => props.theme.borderRadius.sm};

      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};

      font-size: ${(props) => props.theme.fontSize.xs};

      cursor: pointer;
    }

    .submit-button {
      position: fixed;

      border: none;
      left: 0;
      bottom: 0;

      padding: 15px;

      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.primary};

      font-size: ${(props) => props.theme.fontSize.xs};
      width: 25%;

      grid-area: "aside";
      cursor: pointer;
    }
  }
`;

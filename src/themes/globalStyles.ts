import styled from 'styled-components';

export const GlobalStyle = styled.div`
    font-family: ${(props) => props.theme.fontFamily.default};
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box; 

    max-width: 100%;
    max-height: 100%;
`;

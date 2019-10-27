import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';


const CONTAINER_MODIFIERS = {
    Margin15: () =>`
    margin: 15vh auto !important;
    `,

    Margin8: () =>`
    margin: 8vh auto !important;
    `,

    MarginAuto: () =>`
    margin: auto;
    `,


  };

export const Container1 = styled.div`
    max-width: 1500px;
    padding:0 15px;
    position: relative;
    text-align:center !important;
    ${applyStyleModifiers(CONTAINER_MODIFIERS)};

`;

export const Container2 = styled.div`
    max-width: 1080px;
    padding:0 15px;
    margin: auto;
    position: relative;
`;
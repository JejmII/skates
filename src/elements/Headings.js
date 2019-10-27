import styled from 'styled-components';
import { below } from "../utilities";
import { applyStyleModifiers } from 'styled-components-modifiers';


export const Head1 = styled.h1`

font-weight: 200;
font-size: 5rem;
line-height: 7rem;
color: #111212;
text-align:${(props) => props.align};
${below.tablet`font-size: 4.8rem; 
line-height: 6.8rem;
`}
  ${below.mobile`font-size: 4.6rem;
  line-height: 6.6rem;
`}
`;

export const Head3 = styled.h3`
font-weight: 200;
font-size: 4rem;
line-height: 6rem;
color: #111212;
text-align:${(props) => props.align};
color: ${(props) => props.color};
`;

export const Head2 = styled.h2`
font-weight: 300;
font-size: 3rem;
line-height: 5rem;
color: #111212;
text-align:${(props) => props.align};
`;

export const Head4 = styled.h4`
font-weight: 300;
font-size: 2.5rem;
line-height: 3.7rem;
color: #111212;
text-align:${(props) => props.align};
`;
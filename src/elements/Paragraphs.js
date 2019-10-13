import styled from 'styled-components';
import { below } from "../utilities"

export const Para = styled.p`

font-weight: 500;
font-size: 2rem;
line-height: 4rem;
color: #111212;
text-align:${(props) => props.align};
${below.tablet`font-size: 1.9rem; 
line-height: 3.5rem;
`}
  ${below.mobile`font-size: 1.8rem;
  line-height: 3rem;
`}
`;

export const Para1 = styled.p`

font-weight: 200;
font-size: 1.8rem;
line-height: 4rem;
color: #111212;
text-align:${(props) => props.align};
color: ${(props) => props.color};
`;

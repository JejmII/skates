import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { below } from '../utilities'

const GlobalStyle = createGlobalStyle`
    ${normalize()};

    html{
        box-sizing: border-box;
        font-size:10px;
        ${below.tablet`font-size:8px `}
        ${below.mobile`font-size:7px `}

        }

    *, *:before, *:after {
        box-sizing: inherited;
    }

    body {
        font-family: Poppins;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
`;

export default GlobalStyle;
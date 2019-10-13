import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { above, below } from '../utilities'

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

    .SetupBody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    height: 100%
  }
  
  .SetupBody2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .paddingBottom100{
    ${above.underNav`padding-bottom: 120px `}
    ${below.underNav`padding-bottom: 40px `}
  }
    
`;

export default GlobalStyle;
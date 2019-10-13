import { css } from 'styled-components';

const size = {
    mobile:480,
    tablet:700,
    tabletL:1023,
    cennik:1199,
    underNav:767,
  }
  
  
  export const above = Object.keys(size).reduce((acc, label)=>{
    acc[label] = (...args) => css`
     @media (min-width: ${size[label]}px){
       ${css(...args)}
     }
    `
    return acc;
   }, {});
  
  export const below = Object.keys(size).reduce((acc, label)=>{
    acc[label] = (...args) => css`
     @media (max-width: ${size[label]}px){
       ${css(...args)}
     }
    `
    return acc;
   }, {});
import React from "react"
import { Head1 } from '../elements'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from'styled-components'
import { below } from "../utilities"



const NotFoundPage = () => (
  <Layout style={{background:"grey"}}>
    <SEO title="Stranka nenajdena" />
    <Box>
        <Head1 className="centrovanie" align="center">Ospravedlňujeme sa,<br /> ale túto stránku sa nepodarilo nájsť.</Head1>
    </Box>
  </Layout>
)
const Box = styled.div`
  position:absolute;
  background-color: rgba(255, 0, 0, 0.6);
  width:100%;
  margin-top: -25vh;
  z-index: 50;

  h1{
    color:white !important;
    ${below.tabletL`margin 0;background-color: rgba(255, 0, 0, 0.6);`}
  }

  ${below.tabletL`position:relative; margin:0; background-color: rgba(51, 51, 51, 0.8);
`}


`

export default NotFoundPage
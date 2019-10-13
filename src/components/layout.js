import React from "react"
import PropTypes from "prop-types"
import NavWrapper from '../elements/NavbarWrapper'
import GlobalStyle from '../pages/Global'
import PageFooter from '../elements/Footer'
import styled from'styled-components'
import {Helmet} from "react-helmet";
import BgImage from "../elements/BgImage";
import { graphql, useStaticQuery  } from "gatsby"


const Layout = ({ children }) => {
  const SetupBody = styled.div(`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    height: 100%
`)
const SetupBody2 = styled.div(`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`)

const data = useStaticQuery(graphql`
query {
  back: file(relativePath: { eq: "back.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

  return (
    <>
    <Helmet>
      <link data-n-head="true" rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,500&display=swap&subset=latin-ext" rel="stylesheet"/>
    </Helmet>
      <SetupBody>
        <SetupBody2>
        <NavWrapper />
        <BgImage
              title="astronaut"
              fluid={data.back.childImageSharp.fluid}
          />
          <main>{children}</main>
          </SetupBody2>
          <PageFooter />
      </SetupBody>
      <GlobalStyle />
    </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

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
      fluid(maxWidth: 1920, maxHeight: 1080, quality: 80) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`)

  return (
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,500&display=swap&subset=latin-ext" rel="stylesheet"/>
      <link rel="manifest" href="/manifest.json"/>
      <link rel="stylesheet" href="#" type="text/css" media="print" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                document.addEventListener('DOMContentLoaded', function(){ 
                if (window.location.protocol != "https:") {
                window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
                }
                }, false);
              `,
        }}
      />
    </Helmet>
      <SetupBody>
        <SetupBody2>
        <NavWrapper />
        <BgImage
              title="Pozadie stránky"
              alt="Homepage úvodna fotka | Profesionálne brúsenie korčúľ v Bratislave "
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

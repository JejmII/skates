import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import back from "../images/back.jpg"



function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: `https://brusenie-korcul.sk/`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content:  <img src={back} alt="Úvodka" />

        },
        {
          property: `og:image:alt`,
          content: `Profesionálne brúsenie korčúľ v Bratislave.`,
        },
        {
          property: `og:site_name`,
          content: `Profesionálne brúsenie korčúľ v Bratislave.`,
        },
        {
          property: `og:locale`,
          content: `sk`,
        },
        {
          property: `article:author`,
          content: `Sebastián Vašš`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `sk`,
  meta: [],
  title:`Brúsenie Korčúľ | Profesionálne brúsenie korčúľ v Bratislave`,
  description: `Sme firma, ktorá sa stará o profesionálne brúsenie korčúľ v Bratislave. Moderná technológia nám poskytuje brúsiť a dezinfikovať korčule od 4€. `,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

import React from "react"
import { Head1, Container1 } from '../elements'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Stranka nenajdena" />
    <Container1 style={{height:"45.1vh"}}>
      <Head1>Ospravedlňujeme sa,<br /> ale túto stránku sme nenašli</Head1>
    </Container1>
  </Layout>
)


export default NotFoundPage
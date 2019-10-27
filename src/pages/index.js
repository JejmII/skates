import React from "react"
import {Head1, Head3, Head2, Head4, Container1, Container2, Para, Para1} from '../elements'
import Layout from "../components/layout";
import { Col, Row} from 'react-styled-flexboxgrid'
import styled from'styled-components'
import SEO from "../components/seo"
import { color, below } from "../utilities"
import enterprise from  "../images/enterprise1.svg"
import skates from  "../images/skates2.svg"
import machine from  "../images/machine2.svg"
import { graphql, useStaticQuery  } from "gatsby"
import Img from "gatsby-image"


const IndexPage = () => {

const data = useStaticQuery(graphql`
query {
  cennik: file(relativePath: { eq: "Cennik.png" }) {
    childImageSharp {
      fluid( quality: 75) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  korcule: file(relativePath: { eq: "korcule1.png" }) {
    childImageSharp {
      fluid( quality: 75) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  stroj: file(relativePath: { eq: "Prosharp.jpg" }) {
    childImageSharp {
      fluid( quality: 70) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  ponuka: file(relativePath: { eq: "Ponuka.png" }) {
    childImageSharp {
      fluid(quality: 70) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`)

return (
  <>
    <Layout>
      <SEO/>
        <Content>


          <div className="greyground arrow">
            <Container1 modifiers="MarginAuto">
            <Row center="lg">
              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <img src={enterprise} className="firstSectionIcons" alt="Sme viac ako 5 rokov na trhu." />
                <p className="firstSectionHead">
                  Pôsobíme na trhu <span>vyše ako 5 rokov</span>
                </p>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <img src={skates} className="firstSectionIcons" alt="Každoročne nabrúsime viac ako 1000 korčúľ." />
                <p className="firstSectionHead">
                  Kadžý rok nabrúsených <span>viac ako 1000 korčúľ</span>
                </p>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <img src={machine} className="firstSectionIcons" alt="Používame najmodernejšiu technológiu."/>
                <p className="firstSectionHead">
                  Pracujeme s najmodernejšou <span>technológiou v Bratislave</span>
                </p>
              </Col>
            </Row>
          </Container1>
          </div>


          <Container1 modifiers="Margin15">
            <Head1>Kedy a ako často brúsiť korčule?</Head1>
            <Para className="margin-space-75">Je dobré si uvedomiť na začiatok, že na opotrebenie korčúľ pôsobi neskutočne veľa faktorov a preto nikto nevie presne odhadnúť kedy je ten správny čas na brúsenie. Nezúfajte, my Vám s tým pomôžeme.</Para>
            <Row center="lg">
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <Head2>Pred prvým použitím</Head2>
                <Para1>Kvôli bezpečnosti nie je väčšina nových korčulí nabúsená. Preto pred prvým korčulovaním sa u nás zastavte a nabrúsime ich.</Para1>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <Head2>Korčuliar Amatér</Head2>
                <Para1>Naše orientačné doporučenie pre brúsenie korčúľ je každé 2 až 3 týždne ak sa používajú korčule 1 až 2 krát týždenne. </Para1>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <Head2>Pri aktívnom tréningu</Head2>
                <Para1>Naše orientačné doporučenie pre brúsenie korčúľ je raz za 1 až 2 týždne ak sa používajú korčule 3 až 5 krát týždenne. pri aktívnom tréningu.</Para1>
              </Col>
            </Row>
          </Container1>
          
          
          <div className="anchor" id="cennik"></div>
          <div className="greyground margin-space-75">
          <Head3 color="white" align="center" style={{paddingTop:"30px"}}>Cenník</Head3>
            <Container2>
            <Row between="sm">
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={2} md={8} lgOffset={0} lg={9}>
                <div className="thirdSection">
                <table>
                <thead>
                <tr>
                  <th>Služba</th>
                  <th>Čas brúsenia</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{textAlign:"left"}}>Brúsenie 1 páru korčúľ</td>
                <td>± 10 minút</td>
                <td className="cena">5 €</td>
              </tr>
              <tr>
                <td style={{textAlign:"left"}}>Brúsenie nových korčúľ</td>
                <td>± 15 minút</td>
                <td className="cena">7 €</td>
              </tr>
              <tr>
                <td style={{textAlign:"left"}}>Brúsenie hrdzavých korčúľ</td>
                <td>± 15 minút</td>
                <td className="cena">7 €</td>
              </tr>
              <tr>
                <td style={{textAlign:"left"}} colSpan="2">Dezinfekcia korčúľ</td>
                <td className="cena">4 €</td>
              </tr>
              <tr>
                <td className="cena" colSpan="3" style={{textAlign:"right"}}>* platba možná aj KARTOU!</td>
              </tr>
              </tbody>
            </table>
            </div>
              </Col>
              <Col xs={false} sm={false}  md={false} lgOffset={0} lg={3} style={{maxHeight:"375px"}}>
              <Img fluid={data.cennik.childImageSharp.fluid} alt="Obrázok, ktorý sa nachádza pri cenníku brusenia korčúľ."/>
              </Col>
            </Row>
            </Container2>
          </div>


          <div className="anchor" id="technologia"></div>
          <Container1 modifiers="Margin15">
            <Row>
              <Col xsOffset={0} xs={12} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={0} lg={5}>
                <a href="https://www.youtube.com/watch?v=mdTOPO6bGYs" target="_blank" rel="noopener noreferrer">
                <Img fluid={data.stroj.childImageSharp.fluid} alt="Prosharp AS1001 - Stroj ktorý sa stára o presnosť brúsenia korčúľ v Bratislave."/> </a>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={2} lg={5}>
                <Head3>Vikingovia vedeli na čom brúsiť</Head3>
                <Para1>Kvalitné brúsenie korčúľ garantuje prostrednictvom Švédskej brusky Pro-Sharp 1001 SC, ktorá má vynikajúcu reputáciu vo všetkých či už hokejových kluboch po celom svete(NHL, KHL) alebo u profesionálnych korčuliarov. Keramicky kotúč zaručí precízne nabrúsenie, ktoré dlho vydrží. Vďaka tomu bude vaše korčuľovanie ostré, čisté a stabilné zároveň. Najmodernejší upínací mechanizmus zabezpečuje automatické centrovanie. Vďaka tomu budú vaše korčule dôkladne a súmerne nabrúsené po celej dĺžke noža.</Para1>
             </Col>
             </Row>
              <div className="anchor" id="info"></div>
             <Row style={{paddingTop:"15vh"}}>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6}>
                <Head3>Brúsenie krasokorčuliarských a hokejových korčúľ</Head3>
                <Para1> Ako často ich brúsiť ? Samozrejme záleží na tom ako sa často používajú, váhe korčuliara/korčuliarky, kvalite noža, ale aj štýle jazdy a pod. Aj tak sa pokusíme podať základné informácie pre brúsenie korčúľ aspoň pre rekreačných korčuliarov bez skúseností.
                        Najskôr je nutné zmieniť, že keď korčule kúpite, musíte ich nechať pred prvým použitím nabrúsiť, korčule nie sú z výroby zámerne nabrúsené minimálne z bezpečnostných dôvodov pri preprave a hlavne pri skúšaní.
                        Na novom noži je potrebné vybrúsiť tzv. žliabik, teda výbrus spodnej hrany noža v tvaru písmena U, vďaka ktorému vzniknú dve ostré hrany, ktoré sa zarezávajú do ľadu.</Para1>
             </Col>
             <Col xsOffset={0} xs={12} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={2} lg={4}>
                <Img fluid={data.ponuka.childImageSharp.fluid} alt="Ponúkame Vám brúsenie hokejových korčúľ, krasokorčuliarských a rekreačných korčúľ." />
              </Col>
            </Row>
          </Container1>


          <div className="greyground arrow" style={{marginTop:"15vh"}}>
            <Container1 modifiers="MarginAuto">
            <Row className="fifthSectionStart">
              <Col xs={false} sm={false} mdOffset={0} md={6} lgOffset={0} lg={4} style={{marginTop:"-8%"}}>
                <Img fluid={data.korcule.childImageSharp.fluid} alt="Viac zaújmavých informácií o korčuliach a ích servise, ktorý pozostáva z brúsenia. "/>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={3} lg={5}>
                <Head3 className="cw">Čo je potrebné vedieť o žliabiku</Head3>
                <Para1 className="cw">Žliabik si môžete nechať urobiť aj podľa vašich požadaviek. Náročnejší aktívni korčuliari riešia aj hĺbku žliabika. Čím vyššie číslo, tým je hĺbka žliabika menšia (žliabik je mäkší). Tento žliabik prefrujú agilní korčuliari, ktorí sú rýchli a často rýchlo menia smer.</Para1>
                <Para1 className="cw">Naopak hlbší žliabik je obecne povedané vhodný pre silových korčuliarov, ktorí sa potrebujú o ľad viac zaprieť. Hlboký žliabik je tak častovyužívaný silovejšími alebo ťažšími korčuliarmi.</Para1>
                <Para1 className="cw">Tvar žliabika je potom samozrejme veľmi individuálny, každému môže vyhovovať niečo iné.</Para1>
                <Para1 className="cw">Každému korčuliarovi doporučujeme pred vstupom na ľad hrany skontrolovať. Pokiaľ uvidíte poškodené hrany, je potreba nôž upraviť. Pri drobnom poškodení môže stačiť brusný kameň. Pri väčšom poškodení noža je potreba nechať nože prebrúsiť na brúske k tomu určenej.</Para1>
              </Col>
              </Row>
              </Container1>
            </div>

            
            <div className="fifthSection margin-space-75">
                <Head3>V prípade akýchkoľvek otázok nás neváhajte kontaktaktovať</Head3>
                <Head4> <i>- Profesionálne brúsenie korčúľ v Bratislave</i></Head4>
            </div>

            <div className="anchor" id="kontakty"></div>
              <iframe title="Adresa: Bradáčova 1721/5, 851 01 Petržalka, Slovensko" id="gmap_canvas"  src="https://maps.google.com/maps?q=Servis%20a%20po%C5%BEi%C4%8Dov%C5%88a%20ly%C5%BE%C3%AD%20-%20BEKR%20Brad%C3%A1%C4%8Dova%201721%2F5%2C%20851%2001%20Petr%C5%BEalka%2C%20Slovensko&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe>
        </Content>
    </Layout>
  </>
)
}
const Content = styled.div`
.cw{
  color:white !important;
  text-align: center;
}

iframe {
    border:none;
    width:100%;
    height:500px;
    margin:0;
    padding:0;
  }

.anchor{
    display: block;
    position: relative;
    top: -60px;
    visibility: hidden;
}

table{
  width:100%;
  padding: 4rem 6rem;
  ${below.tablet`padding: 2rem 4rem `}
  ${below.mobile`padding: 1.5rem 3rem`}
  text-align: center;

  th{
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3.7rem;
    text-align: center;
    padding-bottom:2.5rem;

    ${below.tablet`
    font-size: 2.5rem;
    line-height: 3rem;
    padding-bottom:2rem;
    `}

    ${below.mobile`
    font-size: 2rem;
    line-height: 2.5rem;
    padding-bottom:2rem;
    `}
  }

  td{
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    padding-bottom:20px;

    ${below.tablet`
    font-size: 1.8rem;
    line-height: 2.5rem;
    padding-bottom:2rem;
    `}

    ${below.mobile`
    font-size: 1.7rem;
    line-height: 2.3rem;
    padding-bottom:2rem;
    `}
  }

  .cena{
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: ${color.grey};

    ${below.tablet`
    font-size: 1.8rem;
    line-height: 2.5rem;
    padding-bottom:2rem;

    `}
    ${below.mobile`
    font-size: 1.7rem;
    line-height: 2.3rem;
    padding-bottom:2rem;

    `}
  }
}

.greyground{
  width:100%;
  background-color:${color.grey};
}

.margin-space-75{
    margin: 7.5vh  0!important
}

.arrow:after{
    content:'';
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-top: 5rem solid ${color.grey};
    border-left: 7rem solid transparent;
    border-right: 7rem solid transparent;

}

.firstSectionHead{
  font-weight: 100;
  font-size: 2.8rem;
  line-height: 4rem;
  color: ${color.white};
  span{
    display:block;
    font-weight: 300;
  }
}

.firstSectionIcons{
  padding-top: 40px;
  height:20vh;
  max-height:15vh;
  margin:auto;
}

.thirdSection{
  max-width: 800px;
  max-height: 375px;
  background: ${color.white};
  border-radius: 80px 0px 0px 0px;
  ${below.cennik`
    border-radius: 10vw 10vw 0px 0px;
  `}

}

.fifthSection{
  padding: 12vh 0 12vh 0;
  text-align: center
}

.fifthSectionStart{
  padding: 60px 15px;
  margin: auto;
  ${below.tabletL`padding: 30px 15px `}
  ${below.mobile`padding: 0 15px`}
}
`
export default IndexPage
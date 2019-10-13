import React from "react"
import {Head1, Head2, Head3, Container1, Container2, Para, Para1} from '../elements'
import Layout from "../components/layout";
import { Col, Row} from 'react-styled-flexboxgrid'
import styled from'styled-components'
import SEO from "../components/seo"
import { color, below } from "../utilities"
import enterprise from  "../images/enterprise.svg"
import skates from  "../images/skates.svg"
import machine from  "../images/machine.svg"
import cennik from  "../images/Cennik.png"
import prosharp from  "../images/Prosharp.jpg"
import G18 from  "../images/G18.png"
import korcule from "../images/korcule.jpg"
import { graphql, useStaticQuery  } from "gatsby"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    ba: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
  <>
    <Layout>
      <SEO title="Brúsenie Korčúľ" description="Úvodna stránka Sport Bekr Bratislava" />
        <Content>
          <div className="greyground arrow">
            <Container1>
            <Row center="lg">

              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="firstSection">
                  <div>
                    <img src={enterprise} className="firstSectionIcons" alt="Ikonka" />
                  </div>
                  <p className="firstSectionHead">
                  Pôsobíme na trhu <span>vyše ako 5 rokov</span>
                  </p>
                </div>
              </Col>


              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="firstSection">
                  <div>
                    <img src={skates} className="firstSectionIcons" alt="Ikonka" />
                  </div>
                  <p className="firstSectionHead">
                    Kadžý rok nabrúsených <span>viac ako 1000 korčúľ</span>
                  </p>
                </div>
              </Col>

              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="firstSection">
                  <div>
                    <img src={machine} className="firstSectionIcons" alt="Ikonka"/>
                  </div>
                  <p className="firstSectionHead">
                    Pracujeme s najmodernejšou <span>technológiou v Bratislave</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container1>
          </div>

          <div className="margin-space-15">
            <Head1 align="center">Kedy a ako často brúsiť korčule?</Head1>
            <Container1>
            <Para align="center" className="margin-space-5">Je dobré si uvedomiť na začiatok, že na opotrebenie korčúľ pôsobi neskutočne veľa faktorov a preto nikto nevie presne odhadnúť kedy je ten správny čas na brúsenie. Nezúfajte, my Vám s tým pomôžeme.</Para>
            <Row center="lg" className="margin-space-5">
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="secondSection">
                  <Head3 align="center">Pred prvým použitím</Head3>
                  <Para1 align="center">Kvôli bezpečnosti nie je väčšina nových korčulí nabúsená. Preto pred prvým korčulovaním sa u nás zastavte a vybavíme to.</Para1>
                </div>
                </Col>
                <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="secondSection">
                <Head3 align="center">Korčuliar Amatér</Head3>
                <Para1 align="center">Naše orientačné doporučenie pre brúsenie korčúľ je každé 2 až 3 týždne ak sa používajú korčule 1 až 2 krát týždenne. </Para1>
                </div>
                </Col>
                <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="secondSection">
                <Head3 align="center">Korčuliar Poloprofesionál</Head3>
                <Para1 align="center">Naše orientačné doporučenie pre brúsenie korčúľ je raz za 1 až 2 týždne ak sa používajú korčule 3 až 5 krát týždenne. pri aktívnom tréningu.</Para1>
                </div>
              </Col>

                </Row>
            </Container1>
          </div>

          <div className="greyground margin-space-5">
          <Head2 color="white" align="center" style={{padding:"3rem 0 2rem 0"}}>Cenník</Head2>
            <Container2 id="cennik">
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
                <td style={{textAlign:"left"}}>Dezinfekcia korčúľ</td>
                <td></td>
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
              <img src={cennik} style={{margin:"0 0 0 30px "}}alt="" />
              </Col>
            </Row>
            </Container2>
          </div>


          <Container1 className="fourthSection margin-space-15">
            <Row>
              <Col xsOffset={0} xs={12} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={0} lg={5}>
                <a href="https://www.youtube.com/watch?v=mdTOPO6bGYs"><img src={prosharp} alt="Prosharp nástroj na brúsenie korčúľ." /></a>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={2} lg={5}>
                <Head2 align="center">Vikingovia vedeli na čom brúsiť</Head2>
                <Para1 align="center" >Kvalitné brúsenie garantuje prostrednictvom Švédskej brusky Pro-Sharp 1001 SC, ktorá má vynikajúcu reputáciu vo všetkých či už hokejových kluboch po celom svete(NHL, KHL) alebo u profesionálnych korčuliarov. Keramicky kotúč zaručí precízne nabrúsenie, ktoré dlho vydrží. Vďaka tomu bude vaše korčuľovanie ostré, čisté a stabilné zároveň. Najmodernejší upínací mechanizmus zabezpečuje automatické centrovanie. Vďaka tomu budú vaše korčule dôkladne a súmerne nabrúsené po celej dĺžke noža.</Para1>
             </Col>
            </Row>
          </Container1>

          <Container1 className="fourthSection margin-space-15">
            <Row>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6} style={{paddingTop:"5vw"}}>
                <Head2 align="center">Individuálny prístup</Head2>
                <Para1 align="center">Překvapit by však mohl fakt, že nikdo, snad krom toho, kdo balónky k obloze vypustil, netuší, jakou má ona stuha barvu. Je totiž tak lesklá, že za světla se v ní odráží nebe a za tmy zase není vidět vůbec. Když svítí slunce tak silně jako nyní, tak se stuha třpytí jako kapka rosy a jen málokdo vydrží dívat se na ni přímo déle než pár chvil. Jak vlastně vypadají ony balónky?. Ptají se často lidé. Inu jak by vypadaly - jako běžné pouťové balónky střední velikosti, tak akorát nafouknuté. Červený se vedle modrého a zeleného zdá trochu menší, ale to je nejspíš jen optický klam, a i kdyby byl skutečně o něco málo menší, tak vážně jen o trošičku.</Para1>
             </Col>
             <Col xsOffset={0} xs={12} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={1} lg={5}>
                <img src={G18} alt="Prosharp nástroj na brúsenie korčúľ." style={{maxHeight:"780px"}}/>
              </Col>
            </Row>
          </Container1>

          <div className="greyground arrow">
            <Container1>
            <Row className="fifthSectionStart">
              <Col xs={false} sm={false} mdOffset={0} md={6} lgOffset={0} lg={4} style={{marginTop:"-8%"}}>
                <img src={korcule} alt="Prosharp nástroj na brúsenie korčúľ." />
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={3} lg={5}>
                <Head2 align="center" color="white">H2 - Poppins Thin 45</Head2>
                <Para1 align="center" color="white">Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. Nejeden filozof by mohl tvrdit, že balónky se sluncem závodí, ale fyzikové by to jistě vyvrátili. Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.</Para1>
                <Para1 align="center" color="white">Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna včera div nebrečela, že by snad balónky mohly prasknout. A co teprve ta stuha. Stuha, kterou je každý z trojice balónků uvázán, aby se nevypustil. Očividně je uvázaná dostatečně pevně, protože balónky skutečně neucházejí. To ale není nic zvláštního.</Para1>
                <Para1 align="center" color="white">Jenže kvůli všudy přítomné trávě jsou stíny balónků sotva vidět, natož aby šlo rozeznat, jakou barvu tyto stíny mají. Uvidět tak balónky náhodný kolemjdoucí, jistě by si pomyslel, že už tu takhle poletují snad tisíc let. Stále si víceméně drží výšku a ani do stran se příliš nepohybují. Proti slunci to vypadá, že se slunce pohybuje k západu rychleji než balónky, a možná to tak skutečně je. </Para1>
             </Col>
            </Row>
            </Container1>
            </div>
            <div className="fifthSection">
                <Head2 align="center">V prípade akýchkoľvek otázok nás kontaktuje.</Head2>
                <Head2 align="center">Je možné sa taktiež sa u nás zastaviť na pobočke.</Head2>
                <Para align="center">Profesionálne brúsenie korčúľ v Bratislave</Para>
            </div>
            <Row className="zero">
              <Col xsOffset={0} xs={12} smOffset={0} sm={12} mdOffset={0} md={12} lgOffset={0} lg={12} >
            <div class="map"><iframe title="Mapa s miestom kde sídli naša firma." width="1920" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=SPORT%20BEKR%20s.r.o&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
            </Col>
            </Row>
        </Content>
    </Layout>
  </>
)

}
const Content = styled.div`

  img{
    width:100%;
    height:auto;
  }

  .zero{
    padding:0;
    margin:0;
  }

.map {
  overflow:hidden;
  position:relative;
  height:400px;


    iframe{
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
    }
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
  max-height:1080px;
  background-color:${color.grey};
}

.margin-space-15{
    margin: 15vh 0 10vh 0;  
}

.margin-space-10{
    margin: 10vh 0 5vh 0;  
}

.margin-space-5{
    margin: 5vh 0;  
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


.background{
  background:${color.gradient};
  position:absolute;
  top: 0px;
  left: 0px;
  width:100%;
  height:100vh;

  .uvodni-logo{
    max-width:1200px;
    max-height:320px;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
    z-index:2;
    background-size: cover;

  }
}

.firstSection{
  max-width: 430px;
  margin:auto;

}

.firstSectionHead{
  font-weight: 100;
  font-size: 2.8rem;
  line-height: 4rem;
  text-align: center;
  color: ${color.white};

  span{
    display:block;
    font-weight: 300;

  }

}

.firstSectionIcons{
  padding-top:40px;
  max-height:8vw;
  min-height:100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

.fourthSection{
  padding: 60px 15px;
  margin: auto;
  ${below.tabletL`padding: 30px 15px `}
  ${below.mobile`padding: 0 15px 30px 15px`}


  img{
  max-width: 800px;
  max-height: 533px;
  }
}

.fifthSection{
  padding: 12vh 0 12vh 0;
  h2{
    line-height:4.5rem;
  }
}

.fifthSectionStart{
  padding: 60px 15px;
  margin: auto;
  ${below.tabletL`padding: 30px 15px `}
  ${below.mobile`padding: 0 15px`}
}


`
export default IndexPage
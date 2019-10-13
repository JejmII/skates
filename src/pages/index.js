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
import cennik from  "../images/Cennik.webp"
import korcule from "../images/korcule.webp"
import stroj from "../images/Prosharp.webp"
import G18 from "../images/G18.webp"

const IndexPage = () => {

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
                    <img src={enterprise} className="firstSectionIcons" alt="Ikonka pôsobime na trhu." />
                  </div>
                  <p className="firstSectionHead">
                  Pôsobíme na trhu <span>vyše ako 5 rokov</span>
                  </p>
                </div>
              </Col>


              <Col xsOffset={0} xs={12} smOffset={0} sm={4} mdOffset={0} md={4} lgOffset={0} lg={4}>
                <div className="firstSection">
                  <div>
                    <img src={skates} className="firstSectionIcons" alt="Ikonka každý rok nabrúsime viac ako 1000 korčúľ.l" />
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
                  <Para1 align="center">Kvôli bezpečnosti nie je väčšina nových korčulí nabúsená. Preto pred prvým korčulovaním sa u nás zastavte a nabrúsime ich.</Para1>
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
                <Head3 align="center">Pri aktívnom tréningu</Head3>
                <Para1 align="center">Naše orientačné doporučenie pre brúsenie korčúľ je raz za 1 až 2 týždne ak sa používajú korčule 3 až 5 krát týždenne. pri aktívnom tréningu.</Para1>
                </div>
              </Col>

                </Row>
            </Container1>
          </div>
          <div className="anchor" id="cennik"></div>
          <div className="greyground margin-space-5">
          <Head2 color="white" align="center" style={{paddingTop:"30px"}}>Cenník</Head2>
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

          <div className="anchor" id="technologia"></div>
          <Container1 className="fourthSection margin-space-15">
            <Row>
              <Col xsOffset={0} xs={12} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={0} lg={5}>
                <a href="https://www.youtube.com/watch?v=mdTOPO6bGYs" target="_blank" rel="noopener noreferrer"><img src={stroj} alt="Prosharp AS1001" /></a>
              </Col>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={2} lg={5}>
                <Head2 align="center">Vikingovia vedeli na čom brúsiť</Head2>
                <Para1 align="center" >Kvalitné brúsenie garantuje prostrednictvom Švédskej brusky Pro-Sharp 1001 SC, ktorá má vynikajúcu reputáciu vo všetkých či už hokejových kluboch po celom svete(NHL, KHL) alebo u profesionálnych korčuliarov. Keramicky kotúč zaručí precízne nabrúsenie, ktoré dlho vydrží. Vďaka tomu bude vaše korčuľovanie ostré, čisté a stabilné zároveň. Najmodernejší upínací mechanizmus zabezpečuje automatické centrovanie. Vďaka tomu budú vaše korčule dôkladne a súmerne nabrúsené po celej dĺžke noža.</Para1>
             </Col>
            </Row>
          </Container1>

          <div className="anchor" id="info"></div>
          <Container1 className="fourthSection margin-space-15">
            <Row>
              <Col xsOffset={0} xs={12} smOffset={1} sm={10} mdOffset={0} md={6} lgOffset={0} lg={6} style={{paddingTop:"5vw"}}>
                <Head2 align="center">Krasokorčule a hokejové korčule</Head2>
                <Para1 align="center">Ako často ich brúsiť ? Samozrejme záleží na tom ako sa často používajú, váhe korčuliara/korčuliarky, kvalite noža, ale aj štýle jazdy a pod. Aj tak sa pokusíme podať základné informácie pre brúsenie korčúľ aspoň pre rekreačných korčuliarov bez skúseností.
Najskôr je nutné zmieniť, že keď korčule kúpite, musíte ich nechať pred prvým použitím nabrúsiť, korčule nie sú z výroby zámerne nabrúsené minimálne z bezpečnostných dôvodov pri preprave a hlavne pri skúšaní.
Na novom noži je potrebné vybrúsiť tzv. žliabik, teda výbrus spodnej hrany noža v tvaru písmena U, vďaka ktorému vzniknú dve ostré hrany, ktoré sa zarezávajú do ľadu.</Para1>
             </Col>
             <Col xsOffset={0} xs={12} smOffset={2} sm={8} mdOffset={0} md={6} lgOffset={1} lg={5}>
                <img src={G18} alt="Prosharp nástroj na brúsenie korčúľ." style={{maxHeight:"780px"}} />
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
                <Head2 align="center" color="white">Čo je potrebné vedieť o žliabiku</Head2>
                <Para1 align="center" color="white">Žliabik si môžete nechať urobiť aj podľa vašich požadaviek. Náročnejší aktívni korčuliari riešia aj hĺbku žliabika. Čím vyššie číslo, tým je hĺbka žliabika menšia (žliabik je mäkší). Tento žliabik prefrujú agilní korčuliari, ktorí sú rýchli a často rýchlo menia smer.</Para1>
                <Para1 align="center" color="white">Naopak hlbší žliabik je obecne povedané vhodný pre silových korčuliarov, ktorí sa potrebujú o ľad viac zaprieť. Hlboký žliabik je tak častovyužívaný silovejšími alebo ťažšími korčuliarmi.</Para1>
                <Para1 align="center" color="white">Tvar žliabika je potom samozrejme veľmi individuálny, každému môže vyhovovať niečo iné.</Para1>
                <Para1 align="center" color="white">Každému korčuliarovi doporučujeme pred vstupom na ľad hrany skontrolovať. Pokiaľ uvidíte poškodené hrany, je potreba nôž upraviť. Pri drobnom poškodení môže stačiť brusný kameň. Pri väčšom poškodení noža je potreba nechať nože prebrúsiť na brúske k tomu určenej.</Para1>
             </Col>
            </Row>
            </Container1>
            </div>
            <div className="fifthSection margin-space-10">
                <Head2 align="center">V prípade akýchkoľvek otázok nás neváhajte kontaktuje</Head2>
                <Para align="center"> -<i> Profesionálne brúsenie korčúľ v Bratislave</i></Para>
            </div>
            <Row className="zero">
            <div className="anchor" id="kontakty"></div>
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

.anchor{
    display: block;
    position: relative;
    top: -60px;
    visibility: hidden;
}

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
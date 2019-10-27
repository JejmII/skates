import React from 'react'
import styled from'styled-components'
import { color, below } from "../utilities"
import { Col, Row} from 'react-styled-flexboxgrid'
import { Head4, Container1, Para1 } from "../elements"
import facebook from  "../images/facebook-f.svg"
import youtube from  "../images/instagram.svg"
import instagram from  "../images/youtube.svg"
import heart from  "../images/heart.svg"


class PageFooter extends React.Component {

      render() {
      return (
          <Foot>
            <Container1 style={{paddingBottom:"30px"}} modifiers="MarginAuto">
              <Row between="md">
                <Col  xs={6}  smOffset={2} sm={4} mdOffset={2} md={4}  lgOffset={0} lg={2}>
                <Head4>Firemné údaje</Head4>
                    <Para1>SPORT BEKR, s. r. o.</Para1>
                    <Para1>Gercenova 5</Para1>
                    <Para1>851 01 Bratislava</Para1>
                    <Para1>IČO: 47898429</Para1>
                    <Para1>IČ DPH: SK2024138259</Para1>
                </Col>

                <Col xsOffset={1} xs={5}  sm={4}  md={4} lgOffset={0} lg={2}>
                <Head4>Brúsiareň</Head4>
                    <Para1>Bradáčova 1721/5</Para1>
                    <Para1>851 01 Petržalka</Para1>
                    <Para1>Slovenská Republika</Para1>
                    <Para1 className="line-height-p">* Budova bývalej kotolňe medzi Bradáčovou 5-6</Para1>
                </Col>

                <Col xs={6} smOffset={2} sm={4} mdOffset={2} md={4} lgOffset={0} lg={2}>
                  <Head4>Kontaktné údaje</Head4>
                    <Para1 className="contact"><a href="tel:0903885858">Tel. č.1: 0903 885 858</a></Para1>
                    <Para1 className="contact"><a href="tel:0262411864">Tel. č.2: 026 241 1864</a></Para1>
                    <Para1 className="contact"><a href="mailto:&#105;&#110;&#102;&#111;&#64;&#115;&#101;&#114;&#118;&#105;&#115;&#45;&#108;&#121;&#122;&#105;&#46;&#115;&#107;">Mail: &#105;&#110;&#102;&#111;&#64;&#115;&#101;&#114;&#118;&#105;&#115;&#45;&#108;&#121;&#122;&#105;&#46;&#115;&#107;</a></Para1>
                    <Para1 className="contact"><a href="https://www.servis-lyzi.sk/kontakt">Informačný formulár</a></Para1>
                </Col>

                <Col xsOffset={1} xs={5} sm={4}  md={4} mdOffset={0} lg={2}>
                  <Head4>Otváracia doba</Head4>
                    <Para1>Pondelok až Piatok</Para1>
                    <Para1>14:00 - 18:30</Para1>
                    <Para1 className="warning"><strong> ! Pozor zmena od 1.11.2019 !</strong></Para1>
                    <Para1>Pondelok až Piatok</Para1>
                    <Para1>09:00 - 12:30</Para1>
                    <Para1>13:30 - 19:00</Para1>
                    <Para1>Sobota</Para1>
                    <Para1>9:00 - 13:00</Para1>
                </Col>
              </Row>
            </Container1>

            <Container1 modifiers="MarginAuto">
              <Row between="lg">
                <Col xsOffset={0} xs={12} smOffset={0} sm={12} mdOffset={1} md={4} lgOffset={0} lg={4}>
                  <Para1  style={{textAlign:"center"}}>
                    <a href="https://www.instagram.com/ski_bekr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={instagram} className="socialNetwork" alt="Ikonka pôsobime na trhu." /></a>
                    <a href="https://www.facebook.com/servislyzipetrzalka/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={facebook} className="socialNetwork" alt="Ikonka pôsobime na trhu." /></a>
                    <a href="https://www.youtube.com/channel/UCOvJTZTzn9S0rg5SFl7XxOw/videos" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><img src={youtube} className="socialNetwork" alt="Ikonka pôsobime na trhu." /></a>
                  </Para1>
                </Col>
                <Col xsOffset={0} xs={12} smOffset={0} sm={12} mdOffset={2} md={4} lgOffset={0} lg={4}>
                      <Para1 style={{textAlign:"center"}}><a href="https://www.facebook.com/sebastian.vass.7" target="_blank" rel="noopener noreferrer" aria-label="Srdce">Vytvorila <img src={heart} className="heart" alt="Ikonka pôsobime na trhu." />skupina <b>CREW Design</b></a></Para1>
                </Col>
              </Row>
            <Para1 className="cookie">Pri poskytovaní služieb nám môžu pomáhať súbory cookie. Plne rešpektujeme nastavenia vášho prehliadača. Ak chcete cookie vypnúť, urobte tak vo vašom prehliadači.</Para1>
            </Container1>
          </Foot>
      );
    }
  }

const Foot = styled.footer`
    width:100%;
    height:auto;
    background: ${color.grey};

    .cookie{
      text-align:center;
      margin:0;
      padding:5vh 0 2vh 0;
      font-weight:300;
    }

      h4, p, i, a{
        color:${color.white};
        text-align:left;


        a{
          text-decoration:none;
        }
      }

      .line-height-p{
        line-height:20px;
        padding-top:15px;
      }

      .warning{
        color:${color.red};
      }

      p{
        line-height: 15px;

        a:hover{
          color: #d1d1cd;
        }
      }

      .socialNetwork{
        height:32px;
        width:auto;
        padding: 0 20px;
      } 

      .heart{
        height:28px;
        width:auto;
        padding: 0 5px;

      } 

      .contact{
        ${below.mobile`
        line-height: 25px;
        `}
      } 
`
  export default PageFooter
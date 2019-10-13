import React from 'react'
import styled from'styled-components'
import { color, below } from "../utilities"
import { Col, Row} from 'react-styled-flexboxgrid'
import { Head4, Container1, Para1 } from "../elements"

class PageFooter extends React.Component {

      render() {
      return (
          <Foot>
            <Container1 style={{paddingBottom:"30px"}}>
              <Row between="lg">
                <Col  xs={6}  sm={4} md={3} lg={2}>
                <Head4>Firemné údaje</Head4>
                    <Para1>SPORT BEKR, s. r. o.</Para1>
                    <Para1>Gercenova 5</Para1>
                    <Para1>851 01 Bratislava</Para1>
                    <Para1>IČO: 47898429</Para1>
                    <Para1>IČ DPH: SK2024138259</Para1>
                </Col>

                <Col xsOffset={1} xs={5} smOffset={4} sm={4} mdOffset={0} md={3} lgOffset={0} lg={2}>
                <Head4>Prodejňa</Head4>
                    <Para1>Bradáčova 1721/5</Para1>
                    <Para1>851 01 Petržalka</Para1>
                    <Para1>Slovenská Republika</Para1>
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                  <Head4>Kontaktné údaje</Head4>
                    <Para1 className="contact"><a href="tel:0903 885 858">Tel. č.1: 0903 885 858</a></Para1>
                    <Para1 className="contact"><a href="tel:026 241 1864">Tel. č.2: 026 241 1864</a></Para1>
                    <Para1 className="contact"><a href="mailto:info@servis-lyzi.sk">Mail: info@servis-lyzi.sk</a></Para1>
                </Col>

                <Col xsOffset={1} xs={5} smOffset={4} sm={4} mdOffset={0} md={3} lgOffset={0} lg={2}>
                  <Head4>Otváracia doba</Head4>
                    <Para1>Pondelok až Piatok</Para1>
                    <Para1>09:00 - 18:00</Para1>
                    <Para1>Sobota, Nedela</Para1>
                    <Para1>Zatvorené</Para1>
                </Col>
              </Row>
            </Container1>

            <Container1>
              <Row between="md">
                <Col xsOffset={0} xs={12} smOffset={0} sm={12} mdOffset={0} md={3} lgOffset={0} lg={3}>
                  <Para1  style={{textAlign:"center"}}>
                    <a href="https://www.instagram.com/ski_bekr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x socialNetwork instagram"></i></a>
                    <a href="https://www.facebook.com/servislyzipetrzalka/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x socialNetwork facebook"></i></a>
                    <a href="https://www.youtube.com/channel/UCOvJTZTzn9S0rg5SFl7XxOw/videos" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-2x socialNetwork youtube"></i></a>
                  </Para1>
                </Col>
                <Col xsOffset={0} xs={12} smOffset={0} sm={12} mdOffset={0} md={4} lgOffset={0} lg={4}>
                      <Para1 style={{textAlign:"center"}}>Vytvořila s <i className="far fa-heart"></i> skupina <b>CREW Design</b></Para1>
                </Col>
              </Row>
            </Container1>
          </Foot>
      );
    }
  }

const Foot = styled.footer`
    width:100%;
    height:auto;
    background: ${color.grey};

      h4, p, i, a{
        color:${color.white};

        a{
          text-decoration:none;
        }

        .facebook:hover{
          color: #1877f2;
        }

        .youtube:hover{
          color:#ff0000;
        }

        .instagram:hover{
          color: #c32aa3;
        }
      }

      p{
        line-height: 15px;
      }

      .socialNetwork{
        padding: 0 20px;
      } 

      .contact{
        ${below.mobile`
        line-height: 25px;
        `}
      } 
`
  export default PageFooter
import React from 'react'
import styled from'styled-components'
import { Link } from "gatsby"
import { color } from "../utilities"
import { Container1 } from "../elements"

class NavDesktop extends React.Component {

      render() {
      return (
        <Navbar>
          <Container1>
            <Menu>
              <div></div>
              <ul>
                  <li><Link activeClassName="active" to="#cennik">Cenník</Link></li>
                  <li><Link activeClassName="active" to="#">Technológia</Link></li>
                  <li><Link activeClassName="active" to="#">Vedeli ste</Link></li>
                  <li><Link activeClassName="active" to="#">Kontakty</Link></li>
              </ul>
            </Menu>
          </Container1>
        </Navbar>
      );
    }
  }


const Navbar = styled.header`
  background: ${color.grey};
  width:100%;
  position:sticky;
  top:0;
  z-index:100;
`

const Menu = styled.nav`
    margin:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ul {
        color: ${color.black};
        display: flex;

        li {
            list-style:none;
            padding: 10px 20px;
            font-weight: 200;
            font-size: 26px;
            line-height: 26px;

            a{
                text-decoration:none;
                color: ${color.white};
                letter-spacing: .1em;
                transition: text-shadow .3s;
            }

            a:hover{
                text-shadow: 0 0 1.30px ${color.white}, 0 0 1.30px ${color.white};
            }

            .active{
              text-shadow: 0 0 1.30px ${color.white}, 0 0 1.30px ${color.white};
            }
        }
    }
`
  export default NavDesktop
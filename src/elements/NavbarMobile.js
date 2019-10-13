import React from 'react'
import styled from'styled-components'
import { Link } from "gatsby"
import { color } from "../utilities"

class NavMobile extends React.Component {
    constructor(props){
        super(props);
        this.state = {isOpen: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isOpen: !state.isOpen

        }));
      }

      render() {
      return (
        <Navbar>
            <div className="navbarContainer">
                <Menu>
                <div></div>
                    <div className="navbar-menu"  onClick={this.handleClick}>
                        <div className={"line1 " + (this.state.isOpen ? "animation-line1" : "")}></div>
                        <div className={"line2 " + (this.state.isOpen ? "animation-line2" : "")}></div>
                        <div className={"line3 " + (this.state.isOpen ? "animation-line3" : "")}></div>
                    </div>
                </Menu>
                {this.state.isOpen &&
                <ul>
                    <li><Link to="#"  activeClassName="active" >Servis</Link></li>
                    <li><Link to="#"activeClassName="active">Požičovňa</Link></li>
                    <li><Link to="#" activeClassName="active">Predaj</Link></li>
                    <li><Link to="#" activeClassName="active">Kontakty</Link></li>
                </ul>
                }
            </div>
        </Navbar>
      );
    }
  }


const Navbar = styled.header`

  position:sticky;
  top:0;
  background: ${color.grey};
  height: 60px;
  width:100%;
  z-index:30;

  .navbarContainer {
    max-width: 1600px;
    margin: auto;
  }

  ul {
      margin-top:60px;
        color: ${color.white} !important;
        background-color:${color.grey};
        padding-bottom:10px;
        z-index:10;
        position: absolute;
        top: 0;
        right: 0;
        box-shadow: -20px 30px 20px rgba(0, 0, 0, 0.10);
        border-radius: 0px 0px 0px 50px;

        li {
            list-style:none;
            padding: 0 20px 0 0;
            font-weight: 200;
            font-size: 30px;
            line-height: 45px;
            text-align:right;
            margin: 0px 25px 0 0;
            z-index:20;

            a{
                text-decoration:none;
                color: ${color.white};
                letter-spacing: .1em;
                transition: text-shadow .3s;

                &:hover, &.active {
                text-shadow: 0 0 1.20px ${color.white}, 0 0 1.20px ${color.white};
                }
            }
        }
    }
`

const Menu = styled.nav`
    margin:0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-menu {
        cursor: pointer;
        height: 40px;
        margin: 10px 50px 0 0;

        .line1, .line2, .line3 {
            width: 36px;
            height: 2px;
            background-color: ${color.white};
            margin: 8px 0;
            transition: 0.4s;
        }

        .animation-line1 {
            transform: rotate(-45deg) translate(-6px, 8px);
        }

        .animation-line2 {
            opacity: 0; 
        }

        .animation-line3 {
            transform: rotate(45deg) translate(-5px, -9px);
        }
    }

    img{
      height:60px;
      padding-left: 20px;
    }
`

  export default NavMobile
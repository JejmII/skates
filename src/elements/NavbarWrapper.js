import React from 'react'
import  NavDesktop  from '../elements/NavbarDesktop'
import  NavMobile from '../elements/NavbarMobile'

class NavWrapper extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0, 
    }
  }
  componentDidMount() {
    this.handleWindowSizeChange()
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
      render() {
        return (
            <>
            {this.state.width <= 830 &&
                <NavMobile />
            }
        
            {this.state.width > 830 &&
            <NavDesktop />
            }
            </>
        );
    }
}

  export default NavWrapper
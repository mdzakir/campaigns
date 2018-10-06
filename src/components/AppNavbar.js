import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class AppNavbar extends Component{
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="xs" className="md-5" style={{marginBottom: '2rem'}}>
          <NavbarBrand href="/" >
            All Campaigns</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/mdzakir" >Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }

}



export default AppNavbar;
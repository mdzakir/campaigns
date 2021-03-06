import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { FaEnvelope, FaBars } from 'react-icons/fa';

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
            <FaEnvelope style={{color: '#289ee5'}}/> All Campaigns</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/mdzakir/campaigns/" >Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }

}



export default AppNavbar;
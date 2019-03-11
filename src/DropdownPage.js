import React from 'react';
import SelectBox from './SelectBox';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownPage extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggletop = this.toggletop.bind(this);
    this.togglebottom = this.togglebottom.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownopentop: false,
      dropdownopenbottom: false,
      choice :""
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

   toggletop() {
    this.setState({
      dropdownopentop: !this.state.dropdownopentop
    });
  }

   togglebottom() {
    this.setState({
      dropdownopenbottom: !this.state.dropdownopenbottom
    });
  }

  handleClick(event){
    console.log("value selected  " +event.target.value)

    this.setState({
          choice : event.target.value
    })

    console.log("value of choice from state " +this.state.choice)
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} size="lg"toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          
          <ButtonDropdown isOpen={this.state.dropdownopentop} size="lg" toggle={this.toggletop} onclick = {this.handleClick.bind(this)}>
          <DropdownToggle caret>
          Topware
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem value = "Topware1">Topware1</DropdownItem>
            <DropdownItem value = "Topware2">Topware2</DropdownItem>
            <DropdownItem value = "Topware3">Topware3</DropdownItem>

          </DropdownMenu>
          </ButtonDropdown>
          

          <ButtonDropdown isOpen={this.state.dropdownopenbottom} size="lg" toggle={this.togglebottom}>
          <DropdownToggle caret>
          Bottomware
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Bottomware1</DropdownItem>
            <DropdownItem>Bottomware2</DropdownItem>
            <DropdownItem>Bottomware3</DropdownItem>

          </DropdownMenu>
          </ButtonDropdown>

        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default DropdownPage;


import React, { Component } from "react";
import "./App.css";
import { DropdownButton, Dropdown } from "react-bootstrap";


class ChannelSelector extends Component {
  
  
  render() {
    return (
      <div>
          <DropdownButton id="dropdown-item-button-alt-right" title="Choose a Series" >
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('simpsons')}>The Simpsons</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('familyGuy')}>Family Guy</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('ninjaTurtles')}>Teenage Mutant Ninja Turles</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('southPark')}>South Park</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('blackDynamite')}>Black Dynamite</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('duckTales')}>Duck Tales</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('boondocks')}>The Boondocks</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('blackPanther')}>Black Panther</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('looneyTunes')}>Looney Tunes</Dropdown.Item>
            <Dropdown.Item as="button" onClick= {() => this.props.onChangeChannel('fatAlbert')}>Fat Albert</Dropdown.Item>
          </DropdownButton>
      </div>
    );
  }
}

export default ChannelSelector;



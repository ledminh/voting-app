/*
============================
BUTTON
============================
State:
  - name: this.state.name
  - className: this.state.className
this.onClick
*/

import React from 'react';
require('../../sass/button.sass');

class Button extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.onClick = this.onClick.bind(this);
    this.light = this.light.bind(this);
    
    //Set state
    this.state = {
      className: "",
      name: "",
      display: ""
    };
  }

  light(status){
    if(status === "on"){
      this.setState({
        display: "current"
      });
    }

    if(status === "off"){
      this.setState({
        display: ""
      });
    }
  }

  onClick(){}

  render(){
    return (<button className={"button " + this.state.className + " " + this.state.display} onClick={this.onClick}>
        {this.state.name}
    </button>
    );
  }
}

module.exports = Button;

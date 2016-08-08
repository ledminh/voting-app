import React from 'react';

require('../../sass/option_input.sass');

class Option_Input extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    //Set state
    this.state = {
      value: ""
    }

  }

  onKeyDown(event){
    if(event.keyCode === 13 && event.target.value !== ""){
      this.props.add_option(event.target.value);

      this.setState({
        value: ""
      });
    }
  }

  onChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return (
      <input className="option_input" type="text" name="option_input"
            placeholder="Type your option here. Press ENTER when finish ..."
            value={this.state.value} onChange={this.onChange}
            onKeyDown={this.onKeyDown}/>
    );
  }
};

module.exports = Option_Input;

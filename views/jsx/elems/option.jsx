import React from 'react';

require('../../sass/option.sass');

class Option extends React.Component{
  constructor(props){
      super(props);

      //Binding
      this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.delete_option(this.props.name);
  }

  render(){
    return (
      <div className="option">
        <div className="option_name">{this.props.name}</div>
        <div className="delete_sign_wrapper" onClick={this.onClick}><img className="delete_sign" src="./../imgs/delete.png" /></div>
      </div>
    );
  }
};

module.exports = Option;

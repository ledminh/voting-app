import React from 'react';

class Page extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      className: "",
      content: "",
      display: ""
    };

    //Binding
    this.hide = this.hide.bind(this);
    this.blur = this.blur.bind(this);
  }

  blur(yes){
    if(yes)
      this.state.display = "blur";
    else {
      this.setState({
        display: ""
      });
    }
  }

  hide(yes){
    if(yes){
      this.setState({
        display: "hidden"
      });
    }
    else {
      this.setState({
        display: ""
      });

    }

  }

  render(){
    return(
      <div className={this.state.className + " " + this.state.display}>
        {this.state.content}
      </div>
    );
  }
};

module.exports = Page;

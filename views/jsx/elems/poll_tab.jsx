import React from 'react';

require('../../sass/poll_tab.sass');

class Poll_Tab extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      delete_icon: ""
    };

    //Binding
    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);

  }

  onClick(){
    this.props.loadData("A_Poll", this.props.id);
    this.props.show("A_Poll");

  }

  delete(event){
    event.stopPropagation();
    this.props.loadData("delete-poll", this.props.id);
  }

  componentWillMount(){
    if(this.props.deletable){
      this.setState({
        delete_icon: (
                <div className="poll_tab_delete_sign_wrapper" onClick={this.delete}>
                  <img className="delete_sign" src="./../imgs/delete.png" />
                </div>)
      });
    }
  }


  render(){
    return (
      <div className="poll_tab" onClick={this.onClick}>
        <div className="name">{this.props.name}</div>

        {this.state.delete_icon}

      </div>
    );
  }
};

module.exports = Poll_Tab;

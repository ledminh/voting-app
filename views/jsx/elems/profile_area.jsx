import React from 'react';
require('../../sass/profile_area.sass');

class Profile_Area extends React.Component {
  constructor(props){
      super(props);

      //Binding
      this.onClick = this.onClick.bind(this);
      this.light = this.light.bind(this);

      this.state = {
        photo: "",
        username: "",
        display: ""
      }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user_profile.username){
      this.setState({
        username: nextProps.user_profile.username,
        photo: nextProps.user_profile.photo,
      });
    }

    if(nextProps.current_page === "MyPage"){
      this.light("on");
    }
    else{
      this.light("off");
    }

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

  onClick(){
    this.props.show("MyPage");
  }

  render() {
    return (
      <button className={"profile_area " + this.state.display} onClick={this.onClick}>
          <img className="profile_picture" src={this.props.user_profile.photo} />
          <div className="profile_greeting">Hello, {this.props.user_profile.username} !!!</div>
      </button>
    );
  }
};

module.exports = Profile_Area;

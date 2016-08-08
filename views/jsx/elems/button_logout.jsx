import Button from "./button.jsx";
require('../../sass/button_logout.sass');

class Button_Logout extends Button {
  constructor(props){
    super(props);

    this.state.name = "Log out";
    this.state.className = "button_logout";
  }

  onClick(){
    window.location = "/logout";
  }
};

module.exports = Button_Logout;

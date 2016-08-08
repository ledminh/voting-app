import Button from "./button.jsx";
require('../../sass/button_facebook.sass');

class Button_Facebook extends Button {
  constructor(props){
    super(props);

    this.state.name = "Login by Facebook";
    this.state.className = "button_facebook";
  }

  onClick(){
    window.location = "/facebook-login";
  }

}

module.exports = Button_Facebook;

import Button from "./button.jsx";
require('../../sass/button_a_poll_submit.sass');

class Button_A_Poll_Submit extends Button {
  constructor(props){
    super(props);

    this.state.name = "Submit";
    this.state.className = "button_a_poll_submit";
  }

  onClick(){
    this.props.addVote();
  }
}

module.exports = Button_A_Poll_Submit;

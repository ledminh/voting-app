import Button from "./button.jsx";
require('../../sass/button_submit.sass');

class Button_Submit extends Button {
  constructor(props){
    super(props);

    this.state.name = "Submit";
    this.state.className = "button_submit";
  }

  onClick(){
    if(this.props.parent === "add_poll"){
        this.props.submit_poll();
    }
  }
}

module.exports = Button_Submit;

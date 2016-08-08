import Button from "./button.jsx";
require('../../sass/button_cancel.sass');

class Button_Cancel extends Button {
  constructor(props){
    super(props);

    this.state.name = "Cancel";
    this.state.className = "button_cancel";
  }


  onClick(){
    this.props.show(this.props.prev_page);
    this.props.reset_add_poll();
  }
}

module.exports = Button_Cancel;

import Button from "./button.jsx";
require('../../sass/button_addpoll.sass');

class Button_AddPoll extends Button {
  constructor(props){
    super(props);

    this.state.name = "Add Poll";
    this.state.className = "button_addpoll";

  }

  componentWillReceiveProps(nextProps){
        if(nextProps.current_page === "Add_Poll"){
          this.light("on");
        }
        else{
          this.light("off");
        }
  }

  onClick(){
    this.props.show("Add_Poll");
  }

}

module.exports = Button_AddPoll;

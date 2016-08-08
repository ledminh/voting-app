import Button from "./button.jsx";
require('../../sass/button_home.sass');

class Button_Home extends Button {
  constructor(props){
    super(props);

    this.state.name = "Home";
    this.state.className = "button_home";
  }

  componentDidMount(){
    if(this.props.current_page === "HomePage"){
      this.light("on");
    }
    else{
      this.light("off");
    }
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.current_page === "HomePage"){
        this.light("on");
      }
      else{
        this.light("off");
      }
  }

  onClick(){
    this.props.show("HomePage");
    this.props.loadData("homepage");

  }




}

module.exports = Button_Home;

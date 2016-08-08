import React from 'react';
import Page from './page.jsx';

import Option from '../elems/option.jsx';
import Button_Submit from '../elems/button_submit.jsx';
import Button_Cancel from '../elems/button_cancel.jsx';

require('../../sass/add_poll.sass');


class Add_Poll extends Page {
  constructor(props){
    super(props);

    //Binding
    this.submit_poll = this.submit_poll.bind(this);
    this.reset_add_poll = this.reset_add_poll.bind(this);


    //Declare state for rendering
    this.state.className = "add_poll";
    this.state.display = "hidden";


  }


  submit_poll(){
    var name = this.refs.Poll_Name.getName();
    var options = this.refs.Options_List.getOptions();

    if(name.length === 0){
        this.props.setNotif("Add_Poll", "ERROR", "Name field is empty");
        return;
    }

    if(options.length === 0){
      this.props.setNotif("Add_Poll", "ERROR", "There is no option in the list");
      return;
    }

    var result = {
      name: name,
      options: options
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', "/submit_poll", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(result));

    this.props.setNotif("Add_Poll", "ADDING SUCCESS", "Poll " + result.name + " added !!!", 1000);
    this.props.loadData("homepage");
    
    setTimeout(() => {
      this.reset_add_poll();
      this.props.show(this.props.prev_page);

    }, 1000);


  }

  reset_add_poll(){
    if(this.refs.Poll_Name.getName().length !== 0
      && this.refs.Options_List.getOptions().length !== 0){
        this.refs.Poll_Name.reset();
        this.refs.Options_List.reset();
      }
  }


  render(){
    return (
      <div className={this.state.className + " " + this.state.display}>
          <div className="content">
              <div className="header">
                ADD NEW POLL
              </div>
              <Poll_Name  ref="Poll_Name" setNotif={this.props.setNotif}/>
              <Options_List ref="Options_List" setNotif={this.props.setNotif}/>

              <div className="footer">
                <Button_Submit parent="add_poll" submit_poll={this.submit_poll} show={this.props.show}
                              reset_add_poll={this.reset_add_poll} prev_page={this.props.prev_page}/>
                <Button_Cancel prev_page={this.props.prev_page} show={this.props.show}
                              reset_add_poll={this.reset_add_poll}/>
              </div>
          </div>
      </div>
    );
  }

};

class Poll_Name extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.onChange = this.onChange.bind(this);
    this.getName = this.getName.bind(this);
    this.reset = this.reset.bind(this);

    //Set state
    this.state = {
      value: "",
      maxLength: 20
    };


  }

  reset(){
    this.setState({
      value: ""
    });
  }


  getName(){
    return this.state.value;
  }

  onChange(event){
    if(event.target.value.length <= this.state.maxLength){
      this.setState({
        value: event.target.value.toUpperCase()
      });
    }
    else{
      this.props.setNotif("Add_Poll", "ERROR", "Maximum characters reached");
    }

  }

  render(){
    return (
      <div className="body_block poll_name">
        <span className="title">NAME: </span>
        <input className="value" type="text" name="poll_name_value"
              placeholder="ENTER NAME OF THE POLL HERE ..."
              onChange={this.onChange}
              value={this.state.value}
        />
      </div>

    );
  }
}

class Options_List extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.update = this.update.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.delete_option = this.delete_option.bind(this);


    this.state = {
      list: [],
      options: [],
      input_value: ""
    };


  }

  onChange(event){
    if(event.target.value.length > 35){
      this.props.setNotif("Add_Poll", "ERROR", "Maximum characters reached");
      return;
    }

    this.setState({
      input_value: event.target.value
    });
  }

  onKeyDown(event){
    if(event.keyCode === 13 && event.target.value !== ""){
      if(this.state.options.length >= 8){
        this.props.setNotif("Add_Poll", "ERROR", "Maximum 8 options");
        return;
      }

      //Update options list
      this.state.options.push(event.target.value);

      //Rendering
      this.update();

      //Clear textinput
      this.setState({
        input_value: ""
      });
    }
  }

  delete_option(option){
    var index = this.state.options.indexOf(option);
    this.state.options.splice(index,1);
    this.update();
  }

  getOptions(){
    return this.state.options;
  }

  reset(){
    this.state.options = [];
    this.update();
  }


  update(){
    var list = [];

    this.state.options.forEach((e, i) => {
        list.push(<Option name={e} key={i} delete_option={this.delete_option}/>);
    });

    this.setState({
      list: list
    });


  }

  render(){
    return(
      <div className="options_list">
        <div className="body_block list">
            {this.state.list}
        </div>

        <div className="body_block input">
          <input className="option_input" type="text" name="option_input"
                placeholder="Type your option here. Press ENTER when finish ..."
                value={this.state.input_value} onChange={this.onChange}
                onKeyDown={this.onKeyDown}/>
        </div>
      </div>
    );
  }
};

module.exports = Add_Poll;

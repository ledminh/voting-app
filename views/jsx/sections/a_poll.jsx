import React from 'react';
import Page from './page.jsx';

import Button_A_Poll_Submit from '../elems/button_a_poll_submit.jsx';
import graph_machine from '../machines/graph_machine.js';

require('../../sass/a_poll.sass');


class A_Poll extends Page {
  constructor(props){
    super(props);

    //Binding
    this.addVote = this.addVote.bind(this);
    this.selectHandler = this.selectHandler.bind(this);

    this.state.className = "a_poll";
    this.state.display = "hidden";
    this.state.options = [];
    this.state.chosen = "";
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.data !== this.props.data){
      graph_machine(nextProps.data.options);

      this.state.options = [];

      nextProps.data.options.forEach((option, i) => {
        this.state.options.push(<option key={i} value={option.value}>{option.value}</option>);
      });

      this.forceUpdate();
    }
  }

  addVote(){
      if(this.state.chosen !== "")
        this.props.loadData("Voting", [this.state.chosen, this.props.data.id]);
      else{
        this.props.setNotif("A_Poll", "Error", "You have to select something", 1000);
      }
  }

  selectHandler(event){
    if(event.target.value !== "Make a choice ...")
        this.state.chosen = event.target.value;
    else {
      this.state.chosen = "";
    }
  }

  render() {
    return(<div className={this.state.className + " " + this.state.display}>
      <div className="graph_header">{this.props.data.name}</div>

      <div className="graph_wrapper"></div>

        <div className="voting_panel">
          <div className="option_list_wrapper">
              <select className="option_list" onChange={this.selectHandler}>
                <option value="Make a choice ...">Make a choice...</option>
                {this.state.options}
              </select>
          </div>

          <div className="submit">
            <Button_A_Poll_Submit addVote={this.addVote}/>
          </div>
        </div>
    </div>)
  }

};

module.exports = A_Poll;

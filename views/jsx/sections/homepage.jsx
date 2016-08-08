import React from 'react';
import Page from "./page.jsx";

import Poll_Tab from "../elems/poll_tab.jsx";

require('../../sass/homepage.sass');

class HomePage extends Page{
  constructor(props){
      super(props);

      this.state.className = "homepage";
      this.state.display = "";
      this.state.poll_tabs = [];
  }


  componentWillReceiveProps(nextProps){
      if(nextProps.data !== this.props.data){
          this.state.poll_tabs = [];
          nextProps.data.polls.forEach((poll) => {
            this.state.poll_tabs.push(<Poll_Tab key={poll.id} name={poll.name}
                                  id={poll.id} show={this.props.show}
                                  loadData={this.props.loadData}/>);
          });

          this.forceUpdate();
      }
  }

  render(){
    return (<div className={this.state.className + " " + this.state.display}>
        <div className="header">
          LIST OF POLLS
        </div>
        <div className="body">
          {this.state.poll_tabs}
        </div>
        <div className="footer"/>
    </div>);
  }
};

module.exports = HomePage;

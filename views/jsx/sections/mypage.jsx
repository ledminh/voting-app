import React from 'react';
import Page from './page.jsx';

import Poll_Tab from "../elems/poll_tab.jsx";

require('../../sass/mypage.sass');

class MyPage extends Page{
  constructor(props){
    super(props);

    this.state.className = "mypage";
    this.state.display = "hidden";
    this.state.data = {
      username: "",
      photo: "",
      num_polls: "",
      my_polls: []
    };

  }

  componentWillReceiveProps(nextProps){
    if((nextProps.data.username && nextProps.data.username !== this.props.data.username)
        || (nextProps.data.num_polls !== this.props.data.num_polls)
        || (nextProps.data.my_polls !== this.props.data.my_polls)){

      this.state.data = {
        username: nextProps.data.username,
        photo: nextProps.data.photo,
        num_polls: nextProps.data.num_polls,
        my_polls: []
      };

      nextProps.data.my_polls.forEach((poll) => {
          this.state.data.my_polls.push(<Poll_Tab key={poll.id} name={poll.name}
                                id={poll.id} show={this.props.show}
                                loadData={this.props.loadData}
                                deletable="true"/>);
      });

      this.forceUpdate();
    }
  }

  hide(yes){
    if(yes){
      this.setState({
        display: "hidden"
      });
    }
    else {
      this.props.loadData("MyPage");
      this.setState({
        display: ""
      });
    }
  }

  render(){
    return(
      <div className={this.state.className + " " + this.state.display}>
          <div className="header">
            MY PAGE
          </div>
          <div className="body_block profile">

              <div className="header">MY PROFILE</div>

              <div className="body">
                <p className="mypage_profile_picture"><img className="profile_picture" src={this.state.data.photo} /></p>
                <p><span className="mypage_name title">Name: </span><span className="mypage_name_value">{this.state.data.username.toUpperCase()}</span></p>
                <p><span className="mypage_num_poll title">Number of Polls: </span><span className="mypage_num_poll_value">{this.state.data.num_polls}</span></p>
              </div>

          </div>

          <div className="body_block my_poll">
              <div className="header">MY POLLS</div>
              <div className="body">
                  {this.state.data.my_polls}
              </div>

          </div>

          <div className="footer"/>
      </div>
    );
  }

};

module.exports = MyPage;

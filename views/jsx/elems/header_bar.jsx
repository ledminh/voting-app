import React from 'react';

import Button_Facebook from './button_facebook.jsx';
import Button_AddPoll from './button_addpoll.jsx';
import Button_Home from './button_home.jsx';
import Button_Logout from './button_logout.jsx';

import Profile_Area from './profile_area.jsx';

require('../../sass/header_bar.sass');

class Header_Bar extends React.Component {

  render(){
    var buttons_group, profile_area;

    if(this.props.user_profile.username){
        buttons_group = [<Button_Home ref="Button_Home" key="btn_home" show={this.props.show}
          current_page={this.props.current_page} loadData={this.props.loadData}/>,

          <Button_AddPoll ref="Button_AddPoll" key="btn_addpoll" show={this.props.show}
          current_page={this.props.current_page} loadData={this.props.loadData}/>,

          <Button_Logout ref="Button_Logout" key="btn_logout" current_page={this.props.current_page}/>];

        profile_area = <Profile_Area ref="Profile_Area" show={this.props.show}
                user_profile={this.props.user_profile} current_page={this.props.current_page}
                loadData={this.props.loadData}/>
    }
    else {
        buttons_group = <Button_Facebook /> ;
        profile_area = "";
    }

    return (
      <div className="header_bar">
            {profile_area}
        <div className="buttons_group">
            {buttons_group}
        </div>
      </div>
    );
  }
};

module.exports = Header_Bar;

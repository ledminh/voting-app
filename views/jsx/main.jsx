import React from 'react';
import ReactDOM from 'react-dom';

import Header_Bar from './elems/header_bar.jsx';
import HomePage from './sections/homepage.jsx';
import MyPage from './sections/mypage.jsx';
import Add_Poll from './sections/add_poll.jsx';
import A_Poll from './sections/a_poll.jsx';
import Notif from './elems/notif.jsx';

require('../sass/main.sass');

class Main extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.hideAll = this.hideAll.bind(this);
    this.show = this.show.bind(this);
    this.setNotif = this.setNotif.bind(this);
    this.loadData = this.loadData.bind(this);


    this.state = {
      notif_data: {
        header: "",
        body: ""
      },
      current_page: "",
      prev_page: "",
      user_profile: {},
      data_mypage: {},
      data_aPoll: [],
      data_homepage: {}
    };

  }

  componentDidMount(){
      this.loadData("check-login");
      this.loadData("homepage");
  }

  loadData(page, query){
      var xhr = new XMLHttpRequest();
      var url;

      //Set up url
      if(page === "MyPage"){
          url= "/mypage";
      }
      else if(page === "check-login"){
        url="/check-login";
      }
      else if(page === "A_Poll"){
        url="/a-poll/?id=" + query;
      }
      else if(page === "Voting"){
        url="/voting/?value=" + query[0] + "&&id=" + query[1];
      }
      else if(page === "homepage"){
        url="/homepage";
      }
      else if(page === "delete-poll"){
        url="/delete-poll/?poll_id=" + query;
      }

      xhr.open('GET', url, true);
      xhr.send();


      //onreadystatechange
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){

          var data = JSON.parse(xhr.response);

          if(page === "MyPage" || page === "delete-poll"){
            this.setState({
              data_mypage: data
            });
          }

          if(page === "check-login"){
            this.setState({
              user_profile: data,
              current_page: "HomePage"
            });
          }

          if(page === "A_Poll" || page === "Voting"){
            this.setState({
              data_aPoll: data
            });
          }

          if(page === "homepage"){
            this.setState({
              data_homepage: data
            });
          }


        }

      };
  }


  hideAll(){
    this.refs.HomePage.hide(true);
    this.refs.MyPage.hide(true);
    this.refs.Add_Poll.hide(true);
    this.refs.A_Poll.hide(true);
  }

  setNotif(parent, header, body, timeout){
    var thisTimeOut;

    this.setState({
      notif_data: {
        header: header,
        body: body
      }
    });

    this.refs.Notif.hide(false);
    this.refs[parent].blur(true);

    if(timeout)
      thisTimeOut = timeout;
    else {
      thisTimeOut = 500;
    }

    setTimeout(()=> {
      this.refs[parent].blur(false);
      this.refs.Notif.hide(true);
    }, thisTimeOut);
  }

  show(page){
    this.hideAll();
    this.refs[page].hide(false);

    this.state.prev_page = this.state.current_page;
    this.setState({
      current_page: page
    });
  }

  render() {

    return (<div className="main">
              <Header_Bar ref="Header_Bar" show={this.show} current_page={this.state.current_page}
                      user_profile={this.state.user_profile} loadData={this.loadData}/>

              <Notif ref="Notif" data={this.state.notif_data} />

              <HomePage ref="HomePage" show={this.show} data={this.state.data_homepage}
                    loadData={this.loadData}/>

              <MyPage ref="MyPage" show={this.show} data={this.state.data_mypage}
                    loadData={this.loadData} current_page={this.state.current_page}/>

              <Add_Poll ref="Add_Poll" show={this.show} setNotif={this.setNotif}
                        prev_page={this.state.prev_page} loadData={this.loadData} />

              <A_Poll ref="A_Poll" show={this.show} data={this.state.data_aPoll}
                                    loadData={this.loadData} setNotif={this.setNotif}/>
            </div>);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));

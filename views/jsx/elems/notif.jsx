import React from 'react';

require('../../sass/notif.sass');

 class Notif extends React.Component {
   constructor(props){
     super(props);

     //Binding
     this.hide = this.hide.bind(this);

     this.state = {
       display: "hidden"
     };

   }

   hide(yes){
     if(yes){
       this.setState({
         display: "hidden"
       });
     }
     else {
       this.setState({
         display: ""
       });
     }

   }


   render(){
     return (
       <div className={"notif " + this.state.display} >
          <div className="content">
              <div className="header">
                {this.props.data.header}
              </div>

              <div className="body">
                {this.props.data.body}
              </div>
          </div>
       </div>
     );
   }
 }

module.exports = Notif

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <header className="header-group">
      <div className="left-nav">
        <img className="navlogo" src="assets/tchat-logo.png"/>
      </div>
      <div className="right-nav">
        <Link to="/profile">
          <img className="profpic" src={`assets/${this.props.currentUser.img_url || 'generic.jpg'}`}/>
        </Link>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </div>
    </header>
    )
  }
}

export default NavBar;

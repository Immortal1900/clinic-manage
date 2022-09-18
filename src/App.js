import React, { Component } from "react";
import SideNavBar from "./components/sideNavBar";
import "./App.css"
import LoginPage from "./components/Login/login";
import { setLogInDetails } from "./actions/setpersondetailsaction";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }


  render() {
    return (
      <div className="App">
        {  
     //   localStorage.getItem('isLoggedIn')  == 'true'
true
      
        ? <SideNavBar /> : <LoginPage />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginDetails: state.loginDetails,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    setOnLogInDetails: (p) => {
      dispatch(setLogInDetails(p));
    },
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(App);

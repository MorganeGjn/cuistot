/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import HomeComp from "components/pages/Home";
import { loginRequest } from "../../../Authentification/actions";
import { logoutRequest } from "../../../Authentification/actions";
import { connect } from "react-redux";

// eslint-disable-next-line react/prefer-stateless-function
export class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeComp
          loginRequest={this.props.loginRequest}
          logined={this.props.logined}
          logoutRequest={this.props.logoutRequest}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logined: state._root.entries[4][1].logined
  };
};

const mapDispatchToProps = dispatch => ({
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
  logoutRequest: () => dispatch(logoutRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

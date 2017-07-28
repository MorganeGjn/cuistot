import React from "react";
import OrganizeComp from "components/pages/Organize";
import { logoutRequest } from "../../../Authentification/actions";
import { connect } from "react-redux";

// eslint-disable-next-line react/prefer-stateless-function
export class Organize extends React.Component {
  render() {
    return (
      <div>
        <OrganizeComp logout={() => this.props.logout()} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

export default connect(null, mapDispatchToProps)(Organize);

import React from "react";
import ProfilComp from "components/pages/Profil";
import { logoutRequest } from "../../../Authentification/actions";
import { connect } from "react-redux";

// eslint-disable-next-line react/prefer-stateless-function
export class Profil extends React.Component {
  render() {
    return (
      <div>
        <ProfilComp logout={() => this.props.logout()} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

export default connect(null, mapDispatchToProps)(Profil);

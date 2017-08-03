import React from "react";
import ReservationComp from "components/pages/Reservation";
import { connect } from "react-redux";
import { logoutRequest } from "../../../Authentification/actions";

// eslint-disable-next-line react/prefer-stateless-function
export class Reservation extends React.Component {
  render() {
    return <ReservationComp logout={this.props.logout} />;
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

export default connect(null, mapDispatchToProps)(Reservation);

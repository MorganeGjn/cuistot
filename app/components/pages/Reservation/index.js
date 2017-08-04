import React from "react";
import { gql, graphql } from "react-apollo";
import PropTypes from "prop-types";
import Header from "../../genericComponents/HeaderPages";
import LoadingIndicator from "../../genericComponents/LoadingIndicator";
import ReservationList from "./reservationList";
import StylePage from "./StylePage";

function ReservationComp(props) {
  if (props.reservation !== false) {
    return (
      <div>
        <Header logout={props.logout} />
        <StylePage>
          <ReservationList reservation={props.reservation} />
        </StylePage>
      </div>
    );
  }
  return (
    <div>
      <Header logout={props.logout} />
      <StylePage>
        <LoadingIndicator />
      </StylePage>
    </div>
  );
}

ReservationComp.defaultProps = {
  loading: true,
  reservation: false
};

const RESERVATION = gql`
  query reservation($gourmet_id: ID!) {
    reservation(gourmet_id: $gourmet_id) {
      gourmet_id
      workshop_id
      amount
    }
  }
`;

const withData = graphql(RESERVATION, {
  options: OwnProps => ({
    variables: {
      gourmet_id: localStorage.getItem('user')
    }
  }),
  props: ({ data: { loading, reservation } }) => ({
    loading,
    reservation: reservation
  })
});

export default withData(ReservationComp);

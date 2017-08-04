import React from "react";
import { gql, graphql } from "react-apollo";
import PropTypes from "prop-types";
import LoadingIndicator from "../../genericComponents/LoadingIndicator";
import ReservationCard from "../../specificComponents/ReservationCard";
import StyleCard from "./StyleCard";

function WorkshopData(props) {
  localStorage.setItem("workshop", props.reservation.workshop_id);
  if (props.workshop !== false) {
    return (
      <ReservationCard
        workshop={props.workshop}
        reservation={props.reservation}
      />
    );
  }
  return (
    <div>
      <LoadingIndicator />
    </div>
  );
}

WorkshopData.defaultProps = {
  loading: true,
  workshop: false
};

const RESERVATION = gql`
  query workshop($workshop_id: ID!) {
    workshop(workshop_id: $workshop_id) {
      workshop_id
      name
      price
      duration
      min_gourmet
      max_gourmet
      description
      pictures
      kitchen_id
      cook_id
      workshop_date
    }
  }
`;

const withData = graphql(RESERVATION, {
  options: OwnProps => ({
    variables: {
      workshop_id: localStorage.getItem("workshop")
    }
  }),
  props: ({ data: { loading, workshop } }) => ({
    loading,
    workshop: workshop
  })
});

export default withData(WorkshopData);

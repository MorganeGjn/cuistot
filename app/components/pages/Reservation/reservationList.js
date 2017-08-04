import React from "react";
import PropTypes from "prop-types";

import Data from "components/pages/Reservation/workshopData";
import ul from "./UL";

function ReservationList(props) {
  let content = <div />;
  if (props.reservation) {
    content = props.reservation.map(item =>
      <Data key={`item-${item.workshop_id}`} reservation={item} />
    );
  }
  return (
    <ul>
      {content}
    </ul>
  );
}

export default ReservationList;

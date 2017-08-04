import React from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";

import Button from "components/genericComponents/Button";
import Image from "components/genericComponents/Image";

import getFormatDate from "../../../utils/date";

import ShadowWrapper from "./ShadowWrapper";
import WorkShopCardWrapper from "./WorkShopCardWrapper";
import Price from "./Price";
import ProfilePic from "./ProfilePic";
import Informations from "./Informations";

export class ReservationCard extends React.Component {
  delReservation = () => {
    this.props
      .mutate({
        variables: {
          gourmet_id: localStorage.getItem("user"),
          workshop_id: localStorage.getItem("workshop")
        }
      })
      .then(localStorage.removeItem("workshop"), location.reload())
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  };
  render() {
    const workshop = this.props.workshop[0];
    const workshopDate = ""; // getFormatDate(workshop.workshopDate);

    let place;
    if (workshop.kitchenId) {
      place = workshop.kitchenByKitchenId.city;
    } else {
      place = "Brest"; //workshop.cookByCookId.gourmetByCookId.city;
    }
    console.log(this.props.workshop);
    return (
      <ShadowWrapper>
        <WorkShopCardWrapper>
          <div>
            {this.props.reservation.amount} place reservée
          </div>
          <Image
            src="http://www.cuistotducoin.com/img/atelier/japon-takako.jpg"
            alt="test"
          />
          <Price>
            {workshop.price}€ / pers.
          </Price>
          <ProfilePic
            src="http://www.cuistotducoin.com/img/profil/takako.jpg"
            alt="test"
          />
          <Informations>
            <div>
              {workshop.name}
            </div>
            <div>
              {place}
            </div>
            <div>
              {workshopDate}
            </div>
          </Informations>
          <a href="workshop/${props.workshop.workshopId}">
            <Button>Voir Détails</Button>
          </a>
          <Button onClick={this.delReservation}>Annuler la réservation</Button>
        </WorkShopCardWrapper>
      </ShadowWrapper>
    );
  }
}

const DELETERESERVATION = gql`
  mutation deleteReservation($gourmet_id: ID!, $workshop_id: ID!) {
    deleteReservation(gourmet_id: $gourmet_id, workshop_id: $workshop_id) {
      gourmet_id
      workshop_id
      amount
    }
  }
`;

const NewEntryWithData = graphql(DELETERESERVATION)(ReservationCard);

export default NewEntryWithData;

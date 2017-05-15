/**
*
* WorkShopCard
*
*/

import React from 'react';
import A from 'components/A';
import Button from 'components/Button';

import WorkShopCardWrapper from './WorkShopCardWrapper';
import TicketAvailable from './TicketAvailable';
import Illustration from './Illustration';
import Price from './Price';
import ProfilePic from './ProfilePic';
import Informations from './Informations';
import Title from './Title';
import Where from './Where';
import When from './When';

function WorkShopCard(props) {
  const workshop = props.workshop;

  return (
    <A href="www.instagram.com/cuistotducoin">
      <WorkShopCardWrapper>
        <TicketAvailable>
          {workshop.maxGourmet} places disponibles
        </TicketAvailable>
        <Illustration
          src="http://www.cuistotducoin.com/img/atelier/japon-takako.jpg"
          alt="test"
        />
        <Price>{workshop.price}€ / pers.</Price>
        <ProfilePic
          src="http://www.cuistotducoin.com/img/profil/takako.jpg"
          alt="test"
        />
        <Informations>
          <Title>{workshop.name}</Title>
          <Where>Chez Arthur Bonnet, à Brest</Where>
          <When>samedi 25 mars, à 15h30</When>
        </Informations>
        <Button href="/{workshop.workshopId}">
          Réserve ta place
        </Button>
      </WorkShopCardWrapper>
    </A>
  );
}

WorkShopCard.propTypes = {
  workshop: React.PropTypes.object,
};

export default WorkShopCard;

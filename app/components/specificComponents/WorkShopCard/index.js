/**
*
* WorkShopCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/genericComponents/Button';
import Image from 'components/genericComponents/Image';
// import Avatar from 'components/genericComponents/Avatar';

import WorkShopCardWrapper from './WorkShopCardWrapper';

import Price from './Price';
import ProfilePic from './ProfilePic';
import Informations from './Informations';

function WorkShopCard(props) {
  const workshop = props.workshop;

  return (
    <WorkShopCardWrapper>
      <div>
        {workshop.maxGourmet} places disponibles
      </div>
      <Image
        src="http://www.cuistotducoin.com/img/atelier/japon-takako.jpg"
        alt="test"
      />
      <Price>{workshop.price}€ / pers.</Price>
      <ProfilePic
        src="http://www.cuistotducoin.com/img/profil/takako.jpg"
        alt="test"
      />
      <Informations>
        <div>{workshop.name}</div>
        <div>Chez Arthur Bonnet, à Brest</div>
        <div>samedi 25 mars, à 15h30</div>
      </Informations>
      <Button href="/{workshop.workshopId}">
        Réserve ta place
      </Button>
    </WorkShopCardWrapper>
  );
}

WorkShopCard.propTypes = {
  workshop: PropTypes.object.isRequired,
};

export default WorkShopCard;

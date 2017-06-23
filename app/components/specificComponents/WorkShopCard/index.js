/**
*
* WorkShopCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from 'components/genericComponents/Button';
import Image from 'components/genericComponents/Image';

import getFormatDate from '../../../utils/date';

import ShadowWrapper from './ShadowWrapper';
import WorkShopCardWrapper from './WorkShopCardWrapper';
import Price from './Price';
import ProfilePic from './ProfilePic';
import Informations from './Informations';
import messages from './messages';

function WorkShopCard(props) {
  const workshop = props.workshop;
  const href = `workshop/${props.workshop.workshop_id}`;
  const workshop_date = ''; // getFormatDate(workshop.workshopDate);

  let place;
  if (workshop.kitchen_id) {
    place = workshop.kitchen.city;
  } else {
    place = workshop.cook.city;
  }

  return (
    <ShadowWrapper>
      <WorkShopCardWrapper>
        <div>
          {workshop.max_gourmet} places disponibles
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
          <div>{place}</div>
          <div>{workshop_date}</div>
        </Informations>
        <Button href={href}>
          <FormattedMessage {...messages.book} />
        </Button>
      </WorkShopCardWrapper>
    </ShadowWrapper>
  );
}

WorkShopCard.propTypes = {
  workshop: PropTypes.object.isRequired,
};

export default WorkShopCard;

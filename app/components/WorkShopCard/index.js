/**
*
* WorkShopCard
*
*/

import React from 'react';
import { gql, graphql } from 'react-apollo';
import A from 'components/A';

import WorkShopCardWrapper from './WorkShopCardWrapper';
import TicketAvailable from './TicketAvailable';
import Illustration from './Illustration';
import Price from './Price';
import ProfilePic from './ProfilePic';
import Informations from './Informations';
import Title from './Title';
import Where from './Where';
import When from './When';
import BtnBook from './BtnBook';

function WorkShopCard() {
  return (
    <A href="www.instagram.com/cuistotducoin">
      <WorkShopCardWrapper>
        <TicketAvailable>5 places disponibles</TicketAvailable>
        <Illustration src="http://www.cuistotducoin.com/img/atelier/japon-takako.jpg" alt="test" />
        <Price>30€ / pers.</Price>
        <ProfilePic src="http://www.cuistotducoin.com/img/profil/takako.jpg" alt="test" />
        <Informations>
          <Title>Atelier sushis, makis californiens et temari</Title>
          <Where>Chez Arthur Bonnet, à Brest</Where>
          <When>samedi 25 mars, à 15h30</When>
        </Informations>
        <BtnBook href="www.instagram.com/cuistotducoin">
          Réserve ta place
        </BtnBook>
      </WorkShopCardWrapper>
    </A>
  );
}

WorkShopCard.propTypes = {};

export default WorkShopCard;

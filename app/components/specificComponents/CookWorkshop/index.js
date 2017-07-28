import React from 'react';

import Image from 'components/genericComponents/Image';

import Workshop from './workshop';
import Price from './price';
import Text from './text';

export default class CookWorkshop extends React.Component {
  render() {
    const w = this.props.workshop;
    return (
      <Workshop>
        <Image src="http://via.placeholder.com/3500x1500" alt={w.name} />
        <Text>
          {w.name}
          <Price>Prix : {w.price}</Price>
          <hr />
          Durée : {w.duration}
          <br />
          Maximum de gourmet : {w.max_gourmet}
          <br />
          Date : {w.workshop_date}
          <br />
          Description : {w.description}
        </Text>
      </Workshop>
    );
  }
}

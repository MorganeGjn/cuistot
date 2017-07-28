import React from 'react';

import Image from 'components/genericComponents/Image';

import Workshop from './workshop';
import Price from './price';

export default class CookWorkshop extends React.Component {
  render() {
    const w = this.props.workshop;
    return (
      <Workshop>
        <Image src="http://via.placeholder.com/3500x1500" alt={w.name} />
        Name : {w.name}
        <br />
        Durée : {w.duration}
        <br />
        Maximum de gourmet : {w.max_gourmet}
        <br />
        Date : {w.workshop_date}
        <br />
        Description : {w.description}
        <Price>Prix : {w.price}</Price>
      </Workshop>
    );
  }
}

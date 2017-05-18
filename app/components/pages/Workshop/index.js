/*
 *
 * Workshop
 *
 */

import React from 'react';
import WorkshopCarousel from '../../specificComponents/WorkshopCarousel';

export class Workshop extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <WorkshopCarousel />
      </div>
    );
  }
}

export default Workshop;

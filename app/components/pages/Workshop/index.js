/*
 *
 * Workshop
 *
 */

import React from 'react';
import WorkshopCarousel from '../../specificComponents/WorkshopCarousel';

// eslint-disable-next-line react/prefer-stateless-function
export class Workshop extends React.PureComponent {
  render() {
    return (
      <div>
        <WorkshopCarousel />
      </div>
    );
  }
}

export default Workshop;

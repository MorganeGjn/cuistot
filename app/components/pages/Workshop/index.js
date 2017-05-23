/*
 *
 * Workshop
 *
 */

import React from 'react';

import Container from '../../genericComponents/Container';
import Header from '../../genericComponents/Header';
import WorkshopCarousel from '../../specificComponents/WorkshopCarousel';

import Main from './Main';
import Sider from './Sider';

// eslint-disable-next-line react/prefer-stateless-function
export class Workshop extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <WorkshopCarousel />
        <Main>
          test
        </Main>
        <Sider>test</Sider>
      </Container>
    );
  }
}

export default Workshop;

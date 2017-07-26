import React from 'react';
import Container from './container';
import Card from './card';
import Card_description from './card_description';
import Card_text from './card_text';

import CookWorkshop from '../CookWorkshop';

import SimpleMapExample from './maps';

export default class CookItemWithData extends React.Component {
  createWorkshop(workshop) {
    return <CookWorkshop workshop={workshop} key={workshop.workshop_id} />;
  }

  createWorkshopList(workshops) {
    return workshops.map(this.createWorkshop);
  }

  render() {
    const cook = this.props.cook;

    return (
      <div>
        <Container>
          <Card>
            <Card_description>
              <Card_text>
                {cook.description}
              </Card_text>
            </Card_description>
          </Card>
          {this.createWorkshopList(cook.workshop)}
        </Container>
        <SimpleMapExample />
      </div>
    );
  }
}

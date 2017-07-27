import React from 'react';
import CookCarousel from 'components/specificComponents/CookCarousel';
import Container from './container';
import Card from './card';
import Card_description from './card_description';
import Card_text from './card_text';
import Card_pro from './card_pro';

import CookWorkshop from '../CookWorkshop';
import CookDescription from '../CookDescription';
import Content from './content';
import Aside from './aside';

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
    const pro = cook.is_pro ? 'Cuisinier Pro' : 'Cuisinier Particulier';

    return (
      <div>
        <Container wrap="wrap">
          <CookCarousel />
          <Card>
            <Card_description>
              <Card_text>
                {cook.description}
              </Card_text>
              <Card_pro>
                {pro}
              </Card_pro>
            </Card_description>
          </Card>
        </Container>
        <Container wrap="wrap">
          <Content>
            {this.createWorkshopList(cook.workshop)}
          </Content>
          <Aside>
            <CookDescription cook={cook} />
          </Aside>
        </Container>
        <SimpleMapExample />
      </div>
    );
  }
}

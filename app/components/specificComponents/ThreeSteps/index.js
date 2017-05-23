/**
*
* ThreeSteps
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from 'components/genericComponents/Icon';
import Container from 'components/genericComponents/Container';
import Column3 from 'components/genericComponents/Container/Column3';
import Column from 'components/genericComponents/Container/Column';
import FlexWrapper from 'components/genericComponents/Container/FlexWrapper';

import ThreeStepsWrapper from './ThreeStepsWrapper';
import Title from './Title';
import Content from './Content';
import messages from './messages';
import { ICONS } from './icons';
import theme from '../../../utils/theme';

function ThreeSteps() {
  return (
    <ThreeStepsWrapper>
      <Container>
        <FlexWrapper>
          <Column3>
            <Column>
              <Icon
                icon={ICONS.SEARCH.SVG}
                viewBox={ICONS.SEARCH.VIEWBOX}
                color={theme.colors.white}
                width={36}
                height={36}
              />
            </Column>
            <Column>
              <Title><FormattedMessage {...messages.onetitle} /></Title>
              <Content><FormattedMessage {...messages.onecontent} /></Content>
            </Column>
          </Column3>
          <Column3>
            <Column>
              <Icon
                icon={ICONS.CREDITCARD.SVG}
                viewBox={ICONS.CREDITCARD.VIEWBOX}
                color={theme.colors.white}
                width={36}
                height={36}
              />
            </Column>
            <Column>
              <Title><FormattedMessage {...messages.twotitle} /></Title>
              <Content><FormattedMessage {...messages.twocontent} /></Content>
            </Column>
          </Column3>
          <Column3>
            <Column>
              <Icon
                icon={ICONS.USERS.SVG}
                viewBox={ICONS.USERS.VIEWBOX}
                color={theme.colors.white}
                width={36}
                height={36}
              />
            </Column>
            <Column>
              <Title><FormattedMessage {...messages.threetitle} /></Title>
              <Content><FormattedMessage {...messages.threecontent} /></Content>
            </Column>
          </Column3>
        </FlexWrapper>
      </Container>
    </ThreeStepsWrapper>
  );
}

export default ThreeSteps;

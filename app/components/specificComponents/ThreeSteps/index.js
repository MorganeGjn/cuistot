/**
*
* ThreeSteps
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ThreeStepsWrapper from './ThreeStepsWrapper';
import Col from './Col';
import Row from './Row';
import Title from './Title';
import Content from './Content';
import Icon from './Icon';
import messages from './messages';
import { ICONS } from './icons';
import theme from '../../../utils/theme';

function ThreeSteps() {
  return (
    <ThreeStepsWrapper>
      <Row>
        <Col>
          <Icon
            icon={ICONS.SEARCH.SVG}
            viewBox={ICONS.SEARCH.VIEWBOX}
            color={theme.colors.gourmet}
          />
        </Col>
        <Col>
          <Title><FormattedMessage {...messages.onetitle} /></Title>
          <Content><FormattedMessage {...messages.onecontent} /></Content>
        </Col>
      </Row>
      <Row>
        <Col>
          <Icon
            icon={ICONS.CREDITCARD.SVG}
            viewBox={ICONS.CREDITCARD.VIEWBOX}
            color={theme.colors.gourmet}
          />
        </Col>
        <Col>
          <Title><FormattedMessage {...messages.twotitle} /></Title>
          <Content><FormattedMessage {...messages.twocontent} /></Content>
        </Col>
      </Row>
      <Row>
        <Col>
          <Icon
            icon={ICONS.USERS.SVG}
            viewBox={ICONS.USERS.VIEWBOX}
            color={theme.colors.gourmet}
          />
        </Col>
        <Col>
          <Title><FormattedMessage {...messages.threetitle} /></Title>
          <Content><FormattedMessage {...messages.threecontent} /></Content>
        </Col>
      </Row>
    </ThreeStepsWrapper>
  );
}

export default ThreeSteps;

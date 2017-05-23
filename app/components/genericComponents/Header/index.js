/**
*
* Header
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from 'components/genericComponents/Icon';
import HeaderLink from './HeaderLink';
import messages from './messages';
import HeaderWrapper from './HeaderWrapper';
import Container from './Container';
import { ICONS } from './icons';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <div>
            <HeaderLink to="/">
              <Icon
                icon={ICONS.BLACK_SEE_THROUGH.SVG}
                viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
                color={'#fff'}
              />
            </HeaderLink>
          </div>
          <div>
            <HeaderLink to="/organize">
              <FormattedMessage {...messages.organize} />
            </HeaderLink>
            <HeaderLink to="/signup">
              <FormattedMessage {...messages.signup} />
            </HeaderLink>
            <HeaderLink to="/login">
              <FormattedMessage {...messages.login} />
            </HeaderLink>
          </div>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;

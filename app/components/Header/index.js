/**
*
* Header
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Link from 'components/Link';
import HeaderLink from './HeaderLink';
import messages from './messages';
import HeaderIcon from './HeaderIcon';
import HeaderWrapper from './HeaderWrapper';
import Container from './Container';
import { ICONS } from './icons';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <div>
            <HeaderLink to="/">
              <HeaderIcon
                icon={ICONS.BLACK_SEE_THROUGH.SVG}
                viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
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

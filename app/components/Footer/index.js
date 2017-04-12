/**
*
* Footer
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import Link from 'components/Link';
import FooterWrapper from './FooterWrapper';
import Container from './Container';
import Column from './Column';
import FooterLink from './FooterLink';
import Title from './Title';
import messages from './messages';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Column>
          <Title>Cuistot du Coin</Title>
          <FooterLink to="/team">
            <FormattedMessage {...messages.team} />
          </FooterLink>
          <FooterLink to="/mission">
            <FormattedMessage {...messages.mission} />
          </FooterLink>
          <FooterLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </FooterLink>
          <FooterLink to="/legal">
            <FormattedMessage {...messages.legal} />
          </FooterLink>
          <FooterLink to="/terms">
            <FormattedMessage {...messages.terms} />
          </FooterLink>
          <FooterLink to="/privacy_policy">
            <FormattedMessage {...messages.privacy_policy} />
          </FooterLink>
          <FooterLink to="/blog">
            <FormattedMessage {...messages.blog} />
          </FooterLink>
        </Column>
        <Column>
          <Title>Gourmet</Title>
          <FooterLink to="/how">
            <FormattedMessage {...messages.how} />
          </FooterLink>
          <FooterLink to="/testimony">
            <FormattedMessage {...messages.testimony} />
          </FooterLink>
          <FooterLink to="/gift">
            <FormattedMessage {...messages.gift} />
          </FooterLink>
          <FooterLink to="/invite">
            <FormattedMessage {...messages.invite} />
          </FooterLink>
        </Column>
        <Column>
          <Title>Cuistot</Title>
          <FooterLink to="/how">
            <FormattedMessage {...messages.how} />
          </FooterLink>
          <FooterLink to="/testimony">
            <FormattedMessage {...messages.testimony} />
          </FooterLink>
        </Column>
      </Container>
      <Container>
        <Title>2017 Cuistot du Coin S.A.S</Title>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

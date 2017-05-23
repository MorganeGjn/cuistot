/**
*
* Footer
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/genericComponents/Container';
import Center from 'components/genericComponents/Container/Center';
import Column3 from 'components/genericComponents/Container/Column3';
import Column from 'components/genericComponents/Container/Column';
import FlexWrapper from 'components/genericComponents/Container/FlexWrapper';

import FooterWrapper from './FooterWrapper';
import Title from './Title';
import FooterLink from './FooterLink';
import messages from './messages';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FlexWrapper>
          <Column3>
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
          </Column3>
          <Column3>
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
          </Column3>
          <Column3>
            <Column>
              <Title>Cuistot</Title>
              <FooterLink to="/how">
                <FormattedMessage {...messages.how} />
              </FooterLink>
              <FooterLink to="/testimony">
                <FormattedMessage {...messages.testimony} />
              </FooterLink>
            </Column>
          </Column3>
        </FlexWrapper>
        <Center>
          <Title>2017 Cuistot du Coin S.A.S</Title>
        </Center>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

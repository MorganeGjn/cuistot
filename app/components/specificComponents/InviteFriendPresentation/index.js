/**
*
* InviteFriendPresentation
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Heading from 'components/genericComponents/Heading';
import Button from 'components/genericComponents/Button';

import ShadowWrapper from './ShadowWrapper';
import InviteFriendWrapper from './InviteFriendWrapper';
import messages from './messages';

function InviteFriendPresentation() {
  const href = '/invite';

  return (
    <ShadowWrapper>
      <InviteFriendWrapper>
        <Heading level={3}><FormattedMessage {...messages.title} /></Heading>
        <Button href={href}>
          <FormattedMessage {...messages.button} />
        </Button>
      </InviteFriendWrapper>
    </ShadowWrapper>
  );
}

export default InviteFriendPresentation;

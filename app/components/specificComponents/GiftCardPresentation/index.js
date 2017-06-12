/**
*
* ThreeSteps
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Heading from 'components/genericComponents/Heading';
import Button from 'components/genericComponents/Button';

import ShadowWrapper from './ShadowWrapper';
import GiftCardWrapper from './GiftCardWrapper';
import messages from './messages';

function GiftCardPresentation() {
  const href = '/offrir';

  return (
    <ShadowWrapper>
      <GiftCardWrapper>
        <Heading level={3}><FormattedMessage {...messages.title} /></Heading>
        <Button href={href}>
          <FormattedMessage {...messages.button} />
        </Button>
      </GiftCardWrapper>
    </ShadowWrapper>
  );
}

export default GiftCardPresentation;

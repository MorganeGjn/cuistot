import React from 'react';
import GeosuggestLib from 'react-geosuggest';
import styled from 'styled-components';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';

import Heading from 'components/genericComponents/Heading';
import Center from 'components/genericComponents/Container/Center';

import theme from '../../../utils/theme';
import messages from './messages';

const GeoSuggestWrapper = styled.div`
  width: 450px;
  background-color: ${theme.colors.gourmet};
  border-radius: 4px;
`;

function GeoSuggest(props) {
  const { formatMessage } = props.intl;
  return (
    <Center>
      <GeoSuggestWrapper>
        <Heading level={2}>
          <FormattedMessage {...messages.title} />
        </Heading>
        <GeosuggestLib placeholder={formatMessage(messages.inputText)} />
      </GeoSuggestWrapper>
    </Center>
  );
}

GeoSuggest.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(GeoSuggest);

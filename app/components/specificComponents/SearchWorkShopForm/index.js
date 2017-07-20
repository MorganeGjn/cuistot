/**
*
* SearchWorkShopForm
*
*/

import React from 'react';

import Button from 'components/genericComponents/Button';
import Form from 'components/genericComponents/Form';
import Geosuggest from 'components/specificComponents/GeoSuggest';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

function SearchWorkShopForm(props) {
  const { formatMessage } = props.intl;
  return (
    <Form>
      <div>
        <Geosuggest placeholder={formatMessage(messages.inputText)} />
      </div>
      <Button type="submit">
        <FormattedMessage {...messages.search} />
      </Button>
    </Form>
  );
}

SearchWorkShopForm.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SearchWorkShopForm);

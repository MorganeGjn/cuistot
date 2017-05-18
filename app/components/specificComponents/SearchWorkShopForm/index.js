/**
*
* SearchWorkShopForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import Button from 'components/genericComponents/Button';
import Form from 'components/genericComponents/Form';
import Input from 'components/genericComponents/Input';
import { reduxForm, Field } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SearchWorkShopForm(props) {
  const { error, handleSubmit, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city"><FormattedMessage {...messages.city} /></label>
        <Field name="city" type="text" component={Input} />
      </div>
      {error && <strong>{error}</strong>}
      <Button type="submit" disabled={submitting}>
        <FormattedMessage {...messages.search} />
      </Button>
    </Form>
  );
}

SearchWorkShopForm.propTypes = {};

export default reduxForm({
  form: 'SearchWorkShopForm',
})(SearchWorkShopForm);

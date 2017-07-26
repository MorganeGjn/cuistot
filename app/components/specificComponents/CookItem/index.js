import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';

import CookCarousel from 'components/specificComponents/CookCarousel';
import CookItemWithData from 'components/specificComponents/CookItemWithData';
import LoadingIndicator from 'components/genericComponents/LoadingIndicator';

function CookItem(props) {
  if (!props.loading && props.cook !== false) {
    return (
      <div>
        <CookCarousel />
        <CookItemWithData cook={props.cook} />
      </div>
    );
  }

  return (
    <div>
      <LoadingIndicator />
    </div>
  );
}

CookItem.propTypes = {
  loading: PropTypes.bool,
  cook: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

CookItem.defaultProps = {
  loading: true,
  cook: false
};

const COOK = gql`
  query cook($cook: ID!) {
    cook(cook_id: $cook) {
      cook_id
      is_pro
      description
      business_name
      siren
      email_pro
      first_name_legal
      last_name_legal
      birthday_legal
      gourmet {
        gourmet_id
        first_name
        last_name
        picture
        gender
        city
        cp
        location
        description
      }
      workshop {
        workshop_id
        name
        price
        duration
        min_gourmet
        max_gourmet
        description
        pictures
        kitchen_id
        cook_id
        workshop_date
      }
    }
  }
`;

const withData = graphql(COOK, {
  options: OwnProps => ({
    variables: {
      cook: OwnProps.id
    }
  }),
  props: ({ data: { loading, cook } }) => ({
    loading,
    cook: cook
  })
});

export default withData(CookItem);

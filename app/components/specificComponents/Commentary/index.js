import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';

import LoadingIndicator from 'components/genericComponents/LoadingIndicator';
import CommentaryListWithData from 'components/specificComponents/CommentaryListWithData';
import CommentaryCard from 'components/specificComponents/CommentaryCard';

function Commentary(props) {
  if (!props.loading && props.commentary !== false) {
    return <CommentaryCard commentary={props.commentary} />;
  }
  return <LoadingIndicator />;
}

Commentary.propTypes = {
  loading: PropTypes.bool,
  commentary: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

Commentary.defaultProps = {
  loading: true,
  commentary: false
};

const COOK = gql`
  query commentary($id: ID!) {
    commentary(cook_id: $id) {
      comment_id
      rating
      commentary
      cook_id
      workshop_id
    }
  }
`;

const withData = graphql(COOK, {
  options: OwnProps => ({
    variables: {
      id: OwnProps.id
    }
  }),
  props: ({ data: { loading, commentary } }) => ({
    loading: false,
    commentary: commentary
  })
});

export default withData(Commentary);

import React, { PropTypes } from 'react';

import { graphql, gql } from 'react-apollo';

export class ApolloTest extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    gourmets: PropTypes.array,
  };

  render() {
    if (this.props.loading) {
      return <span style={{ fontSize: '3rem' }}>Loading...</span>;
    }

    const gourmets = this.props.gourmets.nodes.map((gourmet) => (
      <div style={{ fontSize: '3rem' }}>
        {gourmet.lastName} - {gourmet.firstName}
      </div>
    ));

    return <div>{gourmets}</div>;
  }
}

const TEST_QUERY = gql`
  query TestQuery {
  allGourmets {
    nodes {
      firstName
      lastName
    }
  }
}
`;

const withData = graphql(TEST_QUERY, {
  props: ({ data: { loading, allGourmets } }) => ({
    loading,
    gourmets: allGourmets,
  }),
});

export default withData(ApolloTest);

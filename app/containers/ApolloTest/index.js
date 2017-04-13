import React, { PropTypes } from 'react';

import { graphql, gql } from 'react-apollo';

export class ApolloTest extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loading: PropTypes.bool,
    posts: PropTypes.array,
  };

  render() {
    if (this.props.loading) {
      return <span style={{ fontSize: '3rem' }}>Loading...</span>;
    }

    const posts = this.props.posts.map((post) => (
      <div style={{ fontSize: '3rem' }}>{post.lastName} - {post.description}</div>
    ));

    return <div>{posts}</div>;
  }
}

const TEST_QUERY = gql`
  query TestQuery {
  allGourmets {
    nodes {
      lastName
      description
    }
  }
}
`;

const withData = graphql(TEST_QUERY, {
  props: ({ data: { loading, allPosts } }) => ({
    loading,
    posts: allPosts,
  }),
});

export default withData(ApolloTest);

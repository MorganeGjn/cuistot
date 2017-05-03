/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import { graphql, gql } from 'react-apollo';

import Hero from 'components/Hero';
import ThreeSteps from 'components/ThreeSteps';
import SocialBanner from 'components/SocialBanner';
import WorkshopsList from 'components/WorkshopsList';
import Footer from 'components/Footer';

export class HomePage extends React.Component {
  render() {
    const { loading, error } = this.props;
    let workshops;

    if (!loading) {
      workshops = this.props.workshops.nodes;
    }

    const workshopsListProps = {
      loading,
      error,
      workshops,
    };

    return (
      <div>
        <Hero />
        <ThreeSteps />
        <SocialBanner />
        <WorkshopsList {...workshopsListProps} />
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  workshops: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const DISCOVER_WORKSHOP_QUERY = gql`
  query DisocverWorkshopQuery {
    allWorkshops(last: 3) {
      nodes {
        nodeId
        workshopId
        name
        price
        duration
        minGourmet
        maxGourmet
        description
        pictures
        kitchenId
        cookId
        workshopDate
        reservationsByWorkshopId{totalCount}
      }
    }
  }
`;

const withData = graphql(DISCOVER_WORKSHOP_QUERY, {
  props: ({ data: { loading, allWorkshops } }) => ({
    loading,
    workshops: allWorkshops,
  }),
});

export default withData(HomePage);

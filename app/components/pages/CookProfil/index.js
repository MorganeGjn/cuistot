import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';

import Header from '../../genericComponents/HeaderPages';
import Footer from '../../genericComponents/Footer';

import CookProfilWithData from 'components/specificComponents/CookProfilWithData';
import LoadingIndicator from 'components/genericComponents/LoadingIndicator';

class CookProfilComp extends React.Component {
  loading() {
    if (!this.props.loading && this.props.cook_profil !== false) {
      return <CookProfilWithData profil={this.props.cook_profil} />;
    }

    return <LoadingIndicator />;
  }

  render() {
    // localStorage.setItem('myData', 'TEST');
    // var test = localStorage.getItem('myData');
    return (
      <div>
        <Header logout={() => this.props.logout()} />
        {this.loading()}
        <Footer />
      </div>
    );
  }
}

CookProfilComp.propTypes = {
  loading: PropTypes.bool,
  cook_profil: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

CookProfilComp.defaultProps = {
  loading: true,
  cook_profil: false
};

const COOK_PROFIL = gql`
  query cookProfil($cook: ID!) {
    gourmet(gourmet_id: $cook) {
      gourmet_id
      first_name
      last_name
      picture
      gender
      city
      cp
      location
      description
      cook {
        cook_id
        is_pro
        description
        business_name
        siren
        email_pro
        first_name_legal
        last_name_legal
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
          cook {
            cook_id
            is_pro
            description
            gourmet {
              location
              city
            }
          }
          kitchen {
            kitchen_id
            name
            location
            city
          }
        }
      }
    }
  }
`;

const withData = graphql(COOK_PROFIL, {
  options: OwnProps => ({
    variables: {
      cook: OwnProps.cook_id
    }
  }),
  props: ({ data: { loading, gourmet } }) => ({
    loading,
    cook_profil: gourmet
  })
});

export default withData(CookProfilComp);

import React, { PropTypes } from "react";
import { gql, graphql } from "react-apollo";

// eslint-disable-next-line react/prefer-stateless-function
class GourmetFacebook extends React.Component {
  render() {
    this.props.mutate({
      variables: {
        gourmet_id: this.props.data
      }
    });
    return <div />;
  }
}

const AddGourmet = gql`
  mutation addGourmet($gourmet_id: ID!) {
    addGourmet(gourmet_id: $gourmet_id) {
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
  }
`;

const NewEntryWithData = graphql(AddGourmet)(GourmetFacebook);

export default NewEntryWithData;

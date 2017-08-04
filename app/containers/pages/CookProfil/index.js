import React from 'react';
import CookProfilComp from 'components/pages/CookProfil';
import { logoutRequest } from '../../../Authentification/actions';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
export class CookProfil extends React.Component {
  render() {
    return (
      <div>
        <CookProfilComp
          cook_id={this.props.params.cook}
          logout={() => this.props.logout()}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

export default connect(null, mapDispatchToProps)(CookProfil);

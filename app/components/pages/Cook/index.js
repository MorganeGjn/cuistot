import React from 'react';
import Header from '../../genericComponents/HeaderPages';
import Footer from '../../genericComponents/Footer';
import CookItemComp from '../../specificComponents/CookItem';

export default class Cook extends React.Component {
  render() {
    return (
      <div>
        <Header logout={() => this.props.logout()} />
        <CookItemComp id={this.props.id} />
        <Footer />
      </div>
    );
  }
}

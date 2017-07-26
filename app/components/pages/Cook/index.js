import React from 'react';
import Header from '../../genericComponents/HeaderPages';
import Footer from '../../genericComponents/Footer';

export default class Cook extends React.Component {
  render() {
    return (
      <div>
        <Header logout={() => this.props.logout()} />
        <h1>Cook Page</h1>
        <Footer />
      </div>
    );
  }
}

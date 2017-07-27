import React from 'react';

import Apropos from './apropos';
import Titre from './titre';

export default class CookDescription extends React.Component {
  render() {
    const c = this.props.cook;
    const mail = c.email_pro ? c.email_pro : 'Indisponible';
    const gender = c.gourmet.gender ? c.gourmet.gender : 'Indisponible';
    const pro = c.is_pro ? 'Professionnel' : 'Particulier';
    return (
      <div>
        <Titre>A propos</Titre>
        <Apropos>
          Pro : {c.is_pro}
          <br />
          Business_name : {c.business_name}
          <br />
          Siren : {c.siren}
          <br />
          Email_pro : {mail}
          <br />
          First_name_legal : {c.first_name_legal}
          <br />
          Last_name_legal : {c.last_name_legal}
          <br />
          Birthday_legal : {c.birthday_legal}
          <br />
          Gender : {gender}
          <br />
          City : {c.gourmet.city}
          <br />
          Cp : {c.gourmet.cp}
          <br />
          Description : {c.gourmet.description}
          <br />
        </Apropos>
      </div>
    );
  }
}

import React from 'react';
import { gql, graphql } from 'react-apollo';

import Container from './container';
import Titre from './titre';
import Form from './form';
import Input from './input';
import Textarea from './textarea';
import Select from '../CommentaryForm/selectStyled';
import Submit from '../CommentaryForm/submitStyled';

import Edit from 'react-icons/lib/fa/edit';

class CookProfilWithData extends React.Component {
  constructor(props) {
    super(props);
    const data = this.props.profil[0].cook;

    this.state = {
      cook_id: data.cook_id,
      pro: data.is_pro,
      description: data.description,
      business_name: data.business_name,
      first_name_legal: data.first_name_legal,
      last_name_legal: data.last_name_legal,
      email_pro: data.email_pro,
      siren: data.siren
    };

    this.updateDescription = this.updateDescription.bind(this);
    this.updateBusinessName = this.updateBusinessName.bind(this);
    this.updateFirstNameLegal = this.updateFirstNameLegal.bind(this);
    this.updateLastNameLegal = this.updateLastNameLegal.bind(this);
    this.updateEmailPro = this.updateEmailPro.bind(this);
    this.updateSiren = this.updateSiren.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateDescription(event) {
    this.setState({ description: event.target.value });
  }

  updateBusinessName(event) {
    this.setState({ business_name: event.target.value });
  }

  updateFirstNameLegal(event) {
    this.setState({ first_name_legal: event.target.value });
  }

  updateLastNameLegal(event) {
    this.setState({ last_name_legal: event.target.value });
  }

  updateEmailPro(event) {
    this.setState({ email_pro: event.target.value });
  }

  updateSiren(event) {
    this.setState({ siren: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          cook: this.state.cook_id,
          pro: this.state.pro,
          desc: this.state.description,
          BN: this.state.business_name,
          EP: this.state.email_pro,
          siren: this.state.siren,
          FNL: this.state.first_name_legal,
          LNL: this.state.last_name_legal
        }
      })
      .then(({ data }) => {
        console.log('got data', data);
        this.props.loginRequest(this.state.email, this.state.password);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });

    alert('Sauvegarde effectuée !');
  }

  render() {
    const data = JSON.stringify(this.props.profil[0].cook);
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Titre>
            Modifier votre profil cuistot ! <Edit />
          </Titre>
          <br />
          <Select value={this.state.pro}>
            <option value="true">Professionnel</option>
            <option value="false">Particulier</option>
          </Select>
          <br />
          <label>
            Business Name :
            <Input
              type="text"
              value={this.state.business_name}
              onChange={this.updateBusinessName}
            />
          </label>
          <br />
          <label>
            Description :
            <Textarea
              rows={6}
              value={this.state.description}
              onChange={this.updateDescription}
            />
          </label>
          <br />
          <label>
            Prénom :
            <Input
              type="text"
              value={this.state.first_name_legal}
              onChange={this.updateFirstNameLegal}
            />
          </label>
          <br />
          <label>
            Nom :
            <Input
              type="text"
              value={this.state.last_name_legal}
              onChange={this.updateLastNameLegal}
            />
          </label>
          <br />
          <label>
            Email Pro :
            <Input
              type="text"
              value={this.state.email_pro}
              onChange={this.updateEmailPro}
            />
          </label>
          <br />
          <label>
            Siren :
            <Input
              type="text"
              value={this.state.siren}
              onChange={this.updateSiren}
            />
          </label>
          <br />
          <Submit type="submit">
            Sauvegarder <Edit />
          </Submit>
          <br />
        </Form>
      </Container>
    );
  }
}

const UpdateCookProfil = gql`
  mutation updateCookProfil(
    $cook: ID!
    $pro: Boolean
    $desc: String
    $BN: String
    $siren: String
    $EP: String
    $FNL: String
    $LNL: String
  ) {
    updateCook(
      cook_id: $cook
      is_pro: $pro
      business_name: $BN
      description: $desc
      siren: $siren
      email_pro: $EP
      first_name_legal: $FNL
      last_name_legal: $LNL
    ) {
      cook_id
      is_pro
      description
      business_name
      siren
      email_pro
      first_name_legal
      last_name_legal
    }
  }
`;

const NewEntryWithData = graphql(UpdateCookProfil)(CookProfilWithData);
export default NewEntryWithData;

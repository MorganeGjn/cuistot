/**
*
* Header
*
*/
import React, { PropTypes } from "react";
import { FormattedMessage } from "react-intl";
import { gql, graphql } from "react-apollo";

import Modal from "../ModalBox";
import Icon from "components/genericComponents/Icon";
import HeaderLink from "./HeaderLink";
import HeaderLinkBlack from "./HeaderLinkBlack";
import messages from "./messages";
import HeaderWrapper from "./HeaderWrapper";
import Container from "./Container";
import { ICONS } from "./icons";
import Modalbox from "../ModalBox/Modalboxstyle";
import StyledButton from "components/genericComponents/Button/StyledButton";
import InputStyle from "../Input/StyleInput";
import InputHoursMinutes from "../Input/StyleInputHoursMinutes";
import StyleRows from "./StyleRows";
import StyleCols from "./StyleCols";
import StyleMargin from "./StyleMargin";
import { Image } from "cloudinary-react";
import StyleProfil from "./StyleProfil";
import StyleInProfil from "./StyleInProfil";

var token = null;

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  state = {
    login: false,
    signup: false,
    profil: false,
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    password: null,
    city: null,
    cp: null,
    locationPoint: null,
    loginEmail: null,
    loginPassword: null
  };

  Signup = e => {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          email: this.state.email,
          password_hash: this.state.password
        }
      })
      .then(({ data }) => {
        console.log("got data", data);
        this.props.loginRequest(this.state.email, this.state.password);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  };

  Login = e => {
    e.preventDefault();
    token = this.props.loginRequest(
      this.state.loginEmail,
      this.state.loginPassword
    );
  };

  updateLastName = t => {
    this.setState({ lastName: t.target.value });
  };
  updatePhone = t => {
    this.setState({ phone: t.target.value });
  };
  updateEmail = t => {
    this.setState({ email: t.target.value });
  };
  updatePassword = t => {
    this.setState({ password: t.target.value });
  };
  updateCity = t => {
    this.setState({ city: t.target.value });
  };
  updateCp = t => {
    this.setState({ cp: t.target.value });
  };
  updateLocationPoint = t => {
    this.setState({ locationpoint: t.target.value });
  };
  updateLoginEmail = t => {
    this.setState({ loginEmail: t.target.value });
  };
  updateLoginPassword = t => {
    this.setState({ loginPassword: t.target.value });
  };

  CloseLogin = () => this.setState({ login: false });
  CloseSignup = () => this.setState({ signup: false });
  ButtonLogin = () =>
    this.setState({
      login: true,
      signup: false
    });
  ButtonSignup = () =>
    this.setState({
      signup: true,
      login: false
    });
  CloseProfil = () => this.setState({ profil: false });
  ButtonProfil = () => {
    if (this.state.profil) {
      this.setState({ profil: false });
    } else {
      this.setState({ profil: true });
    }
  };

  render() {
    return (
      <HeaderWrapper>
        <Container>
          <div>
            <HeaderLink to="/">
              <Icon
                icon={ICONS.BLACK_SEE_THROUGH.SVG}
                viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
                color={"#fff"}
              />
            </HeaderLink>
          </div>
          <div>
            {this.props.logined &&
              <HeaderLink to="/organize">
                <FormattedMessage {...messages.organize} />
              </HeaderLink>}
            {!this.props.logined &&
              <HeaderLink>
                <button type="button" name="signup" onClick={this.ButtonSignup}>
                  S&acute;inscrire
                </button>
              </HeaderLink>}
            {!this.props.logined &&
              <HeaderLink>
                <button type="button" name="login" onClick={this.ButtonLogin}>
                  Se connecter
                </button>
              </HeaderLink>}
            <Modal isOpen={this.state.login} onClose={this.CloseLogin}>
              <Modalbox>
                <a href="http://localhost:3000/login/facebook">
                  Login with Facebook
                </a>
                <form>
                  <h3>Connexion</h3>
                  <InputStyle>
                    <input
                      type="email"
                      placeholder="Mail"
                      defaultValue={this.state.loginEmail}
                      onChange={t => this.updateLoginEmail(t)}
                      name="email"
                      size="45"
                    />
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      defaultValue={this.state.loginPassword}
                      onChange={t => this.updateLoginPassword(t)}
                      name="password"
                      size="45"
                    />
                  </InputStyle>
                  <StyleMargin>
                    <button type="submit" onClick={this.Login}>
                      <StyledButton>Connexion</StyledButton>
                    </button>
                  </StyleMargin>
                  Pas encore inscrit?{" "}
                  <button onClick={this.ButtonSignup}>S&acute;inscrire</button>
                </form>
              </Modalbox>
            </Modal>
            <Modal isOpen={this.state.signup} onClose={this.CloseSignup}>
              <Modalbox>
                <form>
                  <h3>Inscription</h3>
                  <StyleRows>
                    <InputHoursMinutes>
                      <input
                        type="text"
                        placeholder="Prénom"
                        defaultValue={this.state.firstName}
                        onChange={t => this.updateFirstName(t)}
                        size="19"
                      />
                    </InputHoursMinutes>
                    <InputHoursMinutes>
                      <input
                        type="text"
                        placeholder="Nom"
                        defaultValue={this.state.lastName}
                        onChange={t => this.updateLastName(t)}
                        size="19"
                      />
                    </InputHoursMinutes>
                  </StyleRows>
                  <InputStyle>
                    <input
                      type="text"
                      placeholder="Téléphone"
                      defaultValue={this.state.phone}
                      onChange={t => this.updatePhone(t)}
                      size="45"
                    />
                  </InputStyle>
                  <StyleRows>
                    <InputStyle>
                      <input
                        type="number"
                        placeholder="Code Postal"
                        defaultValue={this.state.cp}
                        onChange={t => this.updateCp(t)}
                        size="19"
                      />
                    </InputStyle>
                    <InputStyle>
                      <input
                        type="text"
                        placeholder="Ville"
                        defaultValue={this.state.city}
                        onChange={t => this.updateCity(t)}
                        size="19"
                      />
                    </InputStyle>
                  </StyleRows>
                  <InputStyle>
                    <input
                      type="text"
                      placeholder="Adresse"
                      defaultValue={this.state.locationPoint}
                      onChange={t => this.updateLocationPoint(t)}
                      size="45"
                    />
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="email"
                      placeholder="Mail"
                      defaultValue={this.state.email}
                      onChange={t => this.updateEmail(t)}
                      size="45"
                    />
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      defaultValue={this.state.password}
                      onChange={t => this.updatePassword(t)}
                      size="45"
                    />
                  </InputStyle>
                  <StyleMargin>
                    <button onClick={this.Signup}>
                      {" "}<StyledButton>Inscription</StyledButton>
                    </button>
                  </StyleMargin>
                  Déjà inscrit?{" "}
                  <button onClick={this.ButtonLogin}>Se connecter</button>
                </form>
              </Modalbox>
            </Modal>
            {this.props.logined &&
              <button onClick={this.ButtonProfil}>
                <Image
                  cloudName="morgane"
                  publicId="Toque_yhsslu"
                  radius="max"
                  width="30"
                  height="30"
                  scale="crop"
                />
              </button>}
            {this.state.profil &&
              <StyleProfil>
                <button onClick={() => this.props.logoutRequest()}>
                  Deconnexion <br />
                </button>
                <StyleInProfil />
                <HeaderLinkBlack to="/profil">
                  Modifier le profil <br />
                </HeaderLinkBlack>
                <StyleInProfil />
              </StyleProfil>}
          </div>
        </Container>
      </HeaderWrapper>
    );
  }
}

const AddUserAccount = gql`
  mutation addUserAccount($email: String!, $password_hash: String) {
    addUserAccount(email: $email, password_hash: $password_hash) {
      user_id
      email
      email_confirmed
      password_hash
      security_stamp
      concurrency_stamp
      phone_number
      phone_number_confirmed
      two_factor_enabled
      lockout_end
      lockout_enabled
      access_failed_count
    }
  }
`;

const NewEntryWithData = graphql(AddUserAccount)(Header);

export default NewEntryWithData;

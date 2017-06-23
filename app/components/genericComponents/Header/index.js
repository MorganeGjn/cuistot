/**
*
* Header
*
*/
import React, {PropTypes} from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from '../ModalBox';

import Icon from 'components/genericComponents/Icon';
import HeaderLink from './HeaderLink';
import messages from './messages';
import HeaderWrapper from './HeaderWrapper';
import Container from './Container';
import { ICONS } from './icons';
import Modalbox from '../ModalBox/Modalboxstyle';
import StyledButton from 'components/genericComponents/Button/StyledButton';
import InputStyle from '../Input/InputStyle';
import InputStyle2 from '../Input/InputStyle2';
import Style1 from './Style1';
import Style2 from './Style2';
import Style3 from './Style3';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component{
  state = {
      login: false,
      signup: false,
    }

  CloseLogin = () => this.setState({login: false})
  CloseSignup = () => this.setState({signup: false})
  ButtonLogin = () => this.setState({login: true,
                                     signup: false
  })
  ButtonSignup = () => this.setState({signup: true,
                                      login: false
  })

  render(){
    return (
      <HeaderWrapper>
        <Container>
          <div>
            <HeaderLink to="/">
              <Icon
                icon={ICONS.BLACK_SEE_THROUGH.SVG}
                viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
                color={'#fff'}
              />
            </HeaderLink>
          </div>
          <div>
            <HeaderLink to="/organize">
              <FormattedMessage {...messages.organize} />
            </HeaderLink>
            <HeaderLink>
              <button type ="button" name="signup" onClick={this.ButtonSignup}>S&acute;inscrire</button>
            </HeaderLink>
            <HeaderLink>
              <button type ="button" name="login" onClick={this.ButtonLogin}>Se connecter</button>
            </HeaderLink>
             <Modal isOpen = {this.state.login} onRequestClose={this.CloseLogin}>
                <form>
                  <Modalbox>
                  <h3>Connexion</h3>
                  <InputStyle>
                  <input type="email" placeholder="Mail" size= "45"/>
                  </InputStyle>
                  <InputStyle>
                  <input type="password" placeholder="Mot de passe" size="45"/>
                  </InputStyle>
                  <Style3>
                  <StyledButton>
                  <input type="submit" value="Connexion"/>
                  </StyledButton>
                  </Style3>
                  Pas encore inscrit? <button onClick={this.ButtonSignup}>S&acute;inscrire</button>
                  </Modalbox>
                </form>
              </Modal>
            <Modal isOpen={this.state.signup} onRequestClose={this.CloseSignup}>
            <Modalbox>
               <form>
                  <h3>Inscription</h3>
                  <Style1>
                  <InputStyle2>
                  <input type="text" placeholder="Nom" size="19"/>
                  </InputStyle2>
                  <InputStyle2>
                  <input type="text" placeholder="Prénom" size="19"/>
                  </InputStyle2>
                  </Style1>
                  <InputStyle>
                  <input type="text" placeholder="Téléphone" size="45"/>
                  </InputStyle>
                  <InputStyle>
                  <input type="text" placeholder="Adresse postale" size="45" />
                  </InputStyle>
                  <InputStyle>
                  <input type="email" placeholder="Mail" size="45"/>
                  </InputStyle>
                  <InputStyle>
                  <input type="password" placeholder="Mot de passe" size="45"/>
                  </InputStyle>
                  <Style3>
                  <StyledButton>
                  <input type="submit" value="Inscription"/>
                  </StyledButton>
                  </Style3>
                  Déjà inscrit? <button onClick={this.ButtonLogin}>Se connecter</button>
               </form>
               </Modalbox>
              </Modal>
          </div>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;

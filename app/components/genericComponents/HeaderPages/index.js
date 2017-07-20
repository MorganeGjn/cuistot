/**
*
* Header
*
*/
import React, {PropTypes} from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from '../ModalBox';

import Icon from 'components/genericComponents/Icon';
import HeaderLink from '../Header/HeaderLink';
import HeaderLinkBlack from '../Header/HeaderLinkBlack';
import messages from '../Header/messages';
import HeaderWrapper from './HeaderWrapper';
import Container from '../Header/Container';
import { ICONS } from '../Header/icons';
import StyledButton from 'components/genericComponents/Button/StyledButton';
import {Image} from 'cloudinary-react';
import StyleProfil from './StyleProfil';
import FlexWrapper from '../Container/FlexWrapper';
import StyleInProfil from '../Header/StyleInProfil';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component{
  state = {
      login: false,
      signup: false,
      profil: false
    }

  CloseLogin = () => this.setState({login: false})
  CloseSignup = () => this.setState({signup: false})
  ButtonLogin = () => this.setState({login: true,
                                     signup: false
  })
  ButtonSignup = () => this.setState({signup: true,
                                      login: false
  })
  CloseProfil = () => this.setState({profil: false})
  ButtonProfil = () => {
    if(this.state.profil){
      this.setState({profil: false})
    }
    else{
  this.setState({profil: true})
}
}

  render(){
    return (
      <FlexWrapper>
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
              <button onClick={this.ButtonProfil}>
              <Image cloudName='morgane' publicId='Toque_yhsslu' radius='max' width='30' heigh='30' scale ='crop' />
              </button>
            </div>
          </Container>
        </HeaderWrapper>
        {this.state.profil &&
            <StyleProfil>
            <HeaderLinkBlack to="/profil" >
              Modifier le profil <br/>
            </HeaderLinkBlack>
            <StyleInProfil/>
            <StyleInProfil/>
            <button onClick = {() => this.props.logout()}>
              Deconnexion <br/>
            </button>
            <StyleInProfil/>
            </StyleProfil>
          }
          </FlexWrapper>
    );
  }
}

export default Header;

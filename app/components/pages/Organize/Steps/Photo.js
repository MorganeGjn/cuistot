import React from 'react';
import StyleForm from './StyleForm';
import Title from './StyleTitle';
import StyledButton from './StyledButton';
import InputStyle from '../../../genericComponents/Input/InputStyle3';
import IconsRender from './IconsRender';
import Column from '../../../genericComponents/Container/Column';
import Column4 from '../../../genericComponents/Container/Column4';
import Column5 from '../../../genericComponents/Container/Column5';
import Flex from '../../../genericComponents/Container/Flex';
import Style from './StyleButton';
import ImageUpload from './ImageUpload';
import StyleBG from './StyleBackground'

export class Photo extends React.Component {

  Previous = (e) => {
    this.props.previousStep()
  }

continue = (e) => {
  this.props.nextStep()
}

save = (e) => {
  e.preventDefault()
}

  render() {
    return (
        <Flex>
          <Column>
            <Column4>
              <IconsRender save={(e) => this.save(e)}
                           stepOne={() => this.props.stepOne()}
                           stepTwo={() => this.props.stepTwo()}
                           stepThree={() => this.props.stepThree()}
                           stepFour={() => this.props.stepFour()}
              />
            </Column4>
          </Column>
          <StyleBG>
          <Column>
          <Column5>
      <StyleForm>
      <Title>
        <h2>Photos</h2>
        </Title>
        <ImageUpload fieldValues={this.props.fieldValues}/>
        <Style>
        <button onClick={ this.Previous }>
        <StyledButton>
        Précédent
        </StyledButton>
        </button>
        <button onClick={ this.continue }>
        <StyledButton>
        Continuer
        </StyledButton>
        </button>
        </Style>
      </StyleForm>
      </Column5>
    </Column>
    </StyleBG>
  </Flex>
    );
  }
}

export default Photo;

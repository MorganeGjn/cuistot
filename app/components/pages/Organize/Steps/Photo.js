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

export class Photo extends React.Component {
  state = {
    Image: this.props.fieldValues.Image,
  }

  Previous = (e) => {
    this.save(e)
    this.props.previousStep()
  }

  save = (e) => {
  e.preventDefault()
  {this.props.fieldValues.Image = this.state.Image}
}

continue = (e) => {
  this.save(e)
  this.props.nextStep()
}

updateImage = (i) => {
  this.setState({Image: i.target.value})
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
          <Column>
            <Column5>
      <StyleForm>
      <Title>
        <h2>Photo</h2>
        </Title>
        <InputStyle>
        <input type="file"
        defaultValue = {this.state.image}
        onChange={c => this.updateComments(c)}
        />
        </InputStyle>
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
  </Flex>
    );
  }
}

export default Photo;

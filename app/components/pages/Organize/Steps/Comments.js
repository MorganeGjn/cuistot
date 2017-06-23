import React from 'react';
import StyleForm from './StyleForm';
import Title from './StyleTitle';
import InputStyle from '../../../genericComponents/Input/InputStyle3';
import IconsRender from './IconsRender';
import Column from '../../../genericComponents/Container/Column';
import Column4 from '../../../genericComponents/Container/Column4';
import Column5 from '../../../genericComponents/Container/Column5';
import Flex from '../../../genericComponents/Container/Flex';
import Style from './StyleButton';
import StyledButton from './StyledButton';

export class Comments extends React.Component {
  state = {
    Comments: this.props.fieldValues.Comments,
  }
  Previous = (e) => {
    this.save(e)
    this.props.previousStep()
  }

  save = (e) => {
  e.preventDefault()
  {this.props.fieldValues.Comments = this.state.Comments}
}

updateComments = (c) => {
  this.setState({Comments: c.target.value})
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
        <h2>Remarques </h2>
        </Title>
        Avez vous des remarques?
        <InputStyle>
        <textarea placeholder="Remarques" ref="Comments" rows = "10" cols = "52"
        defaultValue={this.state.Comments}
        onChange={c => this.updateComments(c)}/>
        </InputStyle>
        {this.state.Comments}
        <Style>
        <button onClick={ this.Previous }>
        <StyledButton>Précédent</StyledButton>
        </button>
        <button>
        <StyledButton>
        Envoyer
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

export default Comments;

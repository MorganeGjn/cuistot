import React from 'react';
import ReactDOM from 'react-dom';
import StyleForm from './StyleForm';
import Title from './StyleTitle';
import InputStyle from '../../../genericComponents/Input/InputStyle3';
import IconsRender from './IconsRender';
import Column from '../../../genericComponents/Container/Column';
import Column4 from '../../../genericComponents/Container/Column4';
import Column5 from '../../../genericComponents/Container/Column5';
import FlexWrapper from '../../../genericComponents/Container/FlexWrapper';
import A from 'components/genericComponents/A';
import Style from './FirstButton';
import StyledButton from './StyledButton'

export class GlobalInfo extends React.Component {
state = {
  Title: this.props.fieldValues.Title,
  Recipes: this.props.fieldValues.Recipes,
  Description:this.props.fieldValues.Description
}
    save = (e) => {
    e.preventDefault()
    {this.props.fieldValues.Title = this.state.Title,
    this.props.fieldValues.Recipes = this.state.Recipes,
    this.props.fieldValues.Description = this.state.Description}
  }

  updateTitle = (t) => {
    this.setState({Title: t.target.value})
 }

 updateRecipes = (t) => {
   this.setState({Recipes: t.target.value})
}

updateDescription = (t) => {
  this.setState({Description: t.target.value})
}

continue = (e) => {
  this.save(e)
  this.props.nextStep()
}

  render() {
    return (
        <FlexWrapper>
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
                <h2>Présentation de votre atelier</h2>
                </Title>
                Le titre de votre atelier:
                <InputStyle>
                  <input type="text" placeholder="Titre" ref="Title"
                         defaultValue={this.state.Title}
                         onChange={t => this.updateTitle(t)}
                         size="70"/>
                </InputStyle>
                La recette que vous allez présenter aux gourmets:
                <InputStyle>
                  <input type="text" placeholder="Recette" ref="Recipes"
                         defaultValue={this.state.Recipes}
                        onChange={r => this.updateRecipes(r)}
                        size="70"/>
                </InputStyle>
                La description de votre atelier:
                <InputStyle>
                  <textarea rows = '10' cols = '52' placeholder="Description de l'atelier" ref="Description"
                            defaultValue={this.state.Description}
                            onChange={d => this.updateDescription(d)}/>
                </InputStyle>
                <Style>
                <button onClick={this.continue}>
                <StyledButton>
                Continuer
                </StyledButton>
                </button>
                </Style>
              </StyleForm>
            </Column5>
          </Column>
        </FlexWrapper>
    );
  }
}
export default GlobalInfo;

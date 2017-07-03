import React from 'react';
import StyleForm from './StyleForm';
import Title from './StyleTitle';
import InputStyle from '../../../genericComponents/Input/InputStyle3';
import InputStyle2 from '../../../genericComponents/Input/InputStyle2';
import IconsRender from './IconsRender';
import Column from '../../../genericComponents/Container/Column';
import Column4 from '../../../genericComponents/Container/Column4';
import Column5 from '../../../genericComponents/Container/Column5';
import Flex from '../../../genericComponents/Container/Flex';
import StyleHM from './StyleHoursMinutes';
import Style from './StyleButton';
import StyledButton from './StyledButton';


export class PracticalInfo extends React.Component {
  state = {
    PersonNumber: this.props.fieldValues.PersonNumber,
    date: this.props.fieldValues.date,
    Hours: this.props.fieldValues.Hours,
    Minutes: this.props.fieldValues.Minutes,
    Price: this.props.fieldValues.Price
  }

  Previous = (e) => {
    this.save(e)
    this.props.previousStep()
  }


  save = (e) => {
  e.preventDefault()
    {this.props.fieldValues.PersonNumber = this.state.PersonNumber,
    this.props.fieldValues.date = this.state.date,
    this.props.fieldValues.Hours = this.state.Hours,
    this.props.fieldValues.Minutes = this.state.Minutes,
    this.props.fieldValues.Price = this.state.Price}
  this.props.nextStep()
}

continue = (e) => {
  this.save(e)
  this.props.nextStep()
}

updatePersonNumber = (p) => {
  this.setState({PersonNumber: p.target.value})
}

updateDate = (d) => {
 this.setState({date: d.target.value})
}

updateHours = (h) => {
this.setState({Hours: h.target.value})
}
updateMinutes = (m) => {
  this.setState({Minutes: m.target.value})
}

updatePrice = (p) => {
 this.setState({Price: p.target.value})
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
      <h2>Informations Pratiques</h2>
      </Title>
      Combien de personne pouvez-vous accueillir sur l&acute;atelier ?
      <br/>
      <InputStyle2>
      <input type="number" placeholder="Nombre de personne" ref="PersonNumber"
      defaultValue={this.state.PersonNumber}
      onChange={p => this.updatePersonNumber(p)}
      size="70"/>
      </InputStyle2>
      <br/>
      Date et heure de l&acute;atelier:
      <br/>
      <InputStyle2>
      <input type="date" placeholder="Date" ref="date"
      defaultValue={this.state.date}
      onChange={d => this.updateDate(d)}/>
      </InputStyle2>
      <StyleHM>
      <InputStyle2>
      <nobr><input type="number" placeholder="Heures" ref="Hours"
      defaultValue={this.state.Hours}
      onChange={h => this.updateHours(h)}/>h</nobr>
      </InputStyle2>
      <InputStyle2>
      <nobr><input type="number" placeholder="Minutes" ref="Minutes"
      defaultValue={this.state.Minutes}
      onChange={m => this.updateMinutes(m)}/>mn</nobr>
      </InputStyle2>
      </StyleHM>
      Le prix:
      <br/>
      <InputStyle2>
      <input type="number" placeholder="Prix" ref="Price"
      defaultValue={this.state.Price}
      onChange={p => this.updatePrice(p)}/> €
      </InputStyle2>
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

export default PracticalInfo;

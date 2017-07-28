import React from "react";
import StyleForm from "./StyleForm";
import Title from "./StyleTitle";
import InputStyle from "../../../genericComponents/Input/StyleInput";
import InputHoursMinutes from "../../../genericComponents/Input/StyleInputHoursMinutes";
import IconsRender from "./IconsRender";
import Column from "../../../genericComponents/Container/Column";
import Column4 from "../../../genericComponents/Container/Column4";
import Column5 from "../../../genericComponents/Container/Column5";
import Flex from "../../../genericComponents/Container/Flex";
import StyleHM from "./StyleHoursMinutes";
import Style from "./StyleButton";
import StyledButton from "./StyledButton";
import StyleBG from "./StyleBackground";

export class PracticalInfo extends React.Component {
  state = {
    PersonNumber: this.props.fieldValues.PersonNumber,
    date: this.props.fieldValues.date,
    Hours: this.props.fieldValues.Hours,
    Minutes: this.props.fieldValues.Minutes,
    Price: this.props.fieldValues.Price,
    Location: this.props.fieldValues.Location,
    Other: this.props.fieldValues.Other
  };

  Previous = () => {
    this.save();
    this.props.previousStep();
  };

  save = () => {
    {
      (this.props.fieldValues.PersonNumber = this.state.PersonNumber), (this.props.fieldValues.date = this.state.date), (this.props.fieldValues.Hours = this.state.Hours), (this.props.fieldValues.Minutes = this.state.Minutes), (this.props.fieldValues.Price = this.state.Price), (this.props.fieldValues.Location = this.state.Location), (this.props.fieldValues.Other = this.state.Other);
    }
    this.props.nextStep();
  };

  continue = () => {
    this.save();
    this.props.nextStep();
  };

  updatePersonNumber = p => {
    this.setState({ PersonNumber: p.target.value });
  };

  updateDate = d => {
    this.setState({ date: d.target.value });
  };

  updateHours = h => {
    this.setState({ Hours: h.target.value });
  };
  updateMinutes = m => {
    this.setState({ Minutes: m.target.value });
  };

  updatePrice = p => {
    this.setState({ Price: p.target.value });
  };

  updateLocation = p => {
    this.setState({ Location: p.target.value });
  };

  updateOther = p => {
    this.setState({ Other: p.target.value });
  };

  render() {
    let others = null;
    if (this.state.Location == "Autre") {
      others = (
        <InputStyle>
          <input
            type="text"
            placeholder="Préciser l'endroit: nom et adresse"
            defaultValue={this.state.Other}
            onChange={p => this.updateOther(p)}
            size="50"
          />
        </InputStyle>
      );
    }
    return (
      <Flex>
        <Column>
          <Column4>
            <IconsRender
              save={() => this.save()}
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
                  <h2>Informations Pratiques</h2>
                </Title>
                <nobr>
                  Combien de personne pouvez-vous accueillir sur
                  l&acute;atelier?
                </nobr>
                <br />
                <InputHoursMinutes>
                  <input
                    type="number"
                    placeholder="Nombre de personne"
                    ref="PersonNumber"
                    defaultValue={this.state.PersonNumber}
                    onChange={p => this.updatePersonNumber(p)}
                  />
                </InputHoursMinutes>
                <br />
                Date et heure de l&acute;atelier:
                <br />
                <InputHoursMinutes>
                  <input
                    type="date"
                    placeholder="Date"
                    ref="date"
                    defaultValue={this.state.date}
                    onChange={d => this.updateDate(d)}
                  />
                </InputHoursMinutes>
                <StyleHM>
                  <InputHoursMinutes>
                    <nobr>
                      <input
                        type="number"
                        placeholder="Heures"
                        ref="Hours"
                        data-min="0"
                        data-max="23"
                        defaultValue={this.state.Hours}
                        onChange={h => this.updateHours(h)}
                      />h
                    </nobr>
                  </InputHoursMinutes>
                  <InputHoursMinutes>
                    <nobr>
                      <input
                        type="number"
                        placeholder="Minutes"
                        ref="Minutes"
                        data-min="0"
                        data-max="59"
                        defaultValue={this.state.Minutes}
                        onChange={m => this.updateMinutes(m)}
                      />mn
                    </nobr>
                  </InputHoursMinutes>
                </StyleHM>
                Le prix:
                <br />
                <InputHoursMinutes>
                  <input
                    type="number"
                    placeholder="Prix"
                    ref="Price"
                    data-min="0"
                    data-max="10000"
                    size="2"
                    maxlength="2"
                    defaultValue={this.state.Price}
                    onChange={p => this.updatePrice(p)}
                  />{" "}
                  €
                </InputHoursMinutes>
                Où se déroulera l&acute;atelier?
                <InputHoursMinutes>
                  <select
                    value={this.state.Location}
                    onChange={this.updateLocation}
                  >
                    <option value="Chez vous" selected>
                      Chez vous
                    </option>
                    <option value="Arthur Bonnet">
                      La cuisine Arthur Bonnet
                    </option>
                    <option value="Autre">Autre (précisez)</option>
                  </select>
                </InputHoursMinutes>
                {others}
                <Style>
                  <button onClick={this.Previous}>
                    <StyledButton>Précédent</StyledButton>
                  </button>
                  <button onClick={this.continue}>
                    <StyledButton>Continuer</StyledButton>
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

export default PracticalInfo;

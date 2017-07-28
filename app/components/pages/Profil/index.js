import React from "react";
import StyleForm from "./StyleForm";
import Title from "../Organize/Steps/StyleTitle";
import InputStyle from "../../genericComponents/Input/StyleInput";
import StyledButton from "../Organize/Steps/StyledButton";
import StyleBackGround from "./StyleBackGround";
import StyleButton from "../Organize/Steps/FirstButton";
import Column from "../../genericComponents/Container/Column";
import Column4 from "../../genericComponents/Container/Column4";
import Column5 from "../../genericComponents/Container/Column5";
import FlexWrapper from "../../genericComponents/Container/FlexWrapper";
import StyleFieldName from "./StyleFieldName";
import UploadPicture from "./UploadPicture";
import StylePhoto from "./StylePhoto";
import Header from "../../genericComponents/HeaderPages";
import HeaderLinkBlack from "../../genericComponents/Header/HeaderLinkBlack";
import LeftLink from "./LeftLink";

var fieldValues = {
  fisrtName: "",
  lastName: "",
  pictureID: "",
  gender: "",
  city: "",
  cp: "",
  location_point: "",
  description: ""
};

export class Profil extends React.Component {
  state = {
    first_name: fieldValues.first_name,
    last_name: fieldValues.last_name,
    pictureURL: fieldValues.pictureURL,
    pictureID: fieldValues.pictureID,
    gender: fieldValues.gender,
    city: fieldValues.city,
    cp: fieldValues.cp,
    location_point: fieldValues.location_point,
    description: fieldValues.description
  };
  save = e => {
    e.preventDefault();
    {
      (fieldValues.first_name = this.state.first_name), (fieldValues.last_name = this.state.last_name), (fieldValues.pictureURL = this.state.pictureURL), (fieldValues.pictureID = this.state.pictureID), (fieldValues.gender = this.state.gender), (fieldValues.city = this.state.city), (fieldValues.cp = this.state.cp), (fieldValues.location_point = this.state.location_point), (fieldValues.description = this.state.description);
    }
  };

  continue = e => {
    this.save(e);
  };

  updateFirstName = t => {
    this.setState({ fisrt_name: t.target.value });
  };

  updateLastName = t => {
    this.setState({ last_name: t.target.value });
  };

  updatePictureURL = t => {
    this.setState({ pictureURL: t.target.value });
  };

  updatePictureID = t => {
    this.setState({ pictureID: t.target.value });
  };

  updateGender = t => {
    this.setState({ gender: t.target.value });
  };

  updateCity = t => {
    this.setState({ city: t.target.value });
  };

  updateCp = t => {
    this.setState({ cp: t.target.value });
  };

  updateLocationPoint = t => {
    this.setState({ location_point: t.target.value });
  };

  updateDescription = t => {
    this.setState({ description: t.target.value });
  };

  render() {
    return (
      <FlexWrapper>
        <Header logout={() => this.props.logout} />
        <LeftLink>
          <HeaderLinkBlack to="/Reservation">Mes reservations</HeaderLinkBlack>
        </LeftLink>
        <StyleBackGround>
          <FlexWrapper>
            <Column>
              <Column4>
                <StyleFieldName>
                  Prénom <br />
                  Nom <br />
                  Photo <br /> <br /> <br /> <br /> <br />
                  Sexe <br />
                  Ville <br />
                  <nobr> Code postal </nobr> <br />
                  Adresse <br />
                  <nobr> Ma description </nobr> <br />
                </StyleFieldName>
              </Column4>
            </Column>
            <Column>
              <Column5>
                <StyleForm>
                  <Title>
                    <h2>Modifier le profil</h2>
                  </Title>
                  <InputStyle>
                    <input
                      type="text"
                      placeholder="Prénom"
                      ref="first_name"
                      defaultValue={this.state.first_name}
                      onChange={t => this.updateFirstName(t)}
                      size="70"
                    />
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="text"
                      placeholder="Nom"
                      ref="last_name"
                      defaultValue={this.state.last_name}
                      onChange={r => this.updateLastName(t)}
                      size="70"
                    />
                  </InputStyle>
                  <StylePhoto>
                    <UploadPicture fieldValues={fieldValues} />
                  </StylePhoto>
                  <InputStyle>
                    <input
                      placeholder="Sexe"
                      id="Gender"
                      name="Gender"
                      type="text"
                      list="gender"
                      defaultValue={this.state.gender}
                      onChange={r => this.updateGender(t)}
                    />
                    <datalist id="gender">
                      <option value="Femme" />
                      <option value="Homme" />
                      <option value="Autre" />
                    </datalist>
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="text"
                      placeholder="Ville"
                      ref="city"
                      defaultValue={this.state.city}
                      onChange={r => this.updateCity(t)}
                      size="70"
                    />
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="number"
                      placeholder="Code Postal"
                      ref="cp"
                      defaultValue={this.state.cp}
                      onChange={r => this.updateCp(t)}
                      size="70"
                    />
                  </InputStyle>
                  <InputStyle>
                    <input
                      type="text"
                      placeholder="Adresse"
                      ref="location_point"
                      defaultValue={this.state.location_point}
                      onChange={r => this.updateLocationPoint(t)}
                      size="70"
                    />
                  </InputStyle>
                  <InputStyle>
                    <textarea
                      rows="10"
                      cols="52"
                      placeholder="Description"
                      ref="Description"
                      defaultValue={this.state.description}
                      onChange={d => this.updateDescription(d)}
                    />
                  </InputStyle>
                  <StyleButton>
                    <button onClick={this.continue}>
                      <StyledButton>Sauvegarder</StyledButton>
                    </button>
                  </StyleButton>
                </StyleForm>
              </Column5>
            </Column>
          </FlexWrapper>
        </StyleBackGround>
      </FlexWrapper>
    );
  }
}
export default Profil;

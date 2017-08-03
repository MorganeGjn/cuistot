import React from "react";
import StyleForm from "./StyleForm";
import Title from "./StyleTitle";
import StyledButton from "./StyledButton";
import InputStyle from "../../../genericComponents/Input/StyleInput";
import IconsRender from "./IconsRender";
import Column from "../../../genericComponents/Container/Column";
import Column4 from "../../../genericComponents/Container/Column4";
import Column5 from "../../../genericComponents/Container/Column5";
import Flex from "../../../genericComponents/Container/Flex";
import Style from "./StyleButton";
import StyleBG from "./StyleBackground";
import StyleImage2 from "./StyleImageSecondary";
import ImageCloudinary from "./ImageCloudinary";

export class Photo extends React.Component {
  state = {
    publicIdOne: this.props.fieldValues.publicIdOne,
    publicIdTwo: this.props.fieldValues.publicIdTwo,
    publicIdThree: this.props.fieldValues.publicIdThree,
    publicIdFour: this.props.fieldValues.publicIdFour
  };
  save = () => {
    (this.props.fieldValues.publicIdOne = this.state.publicIdOne), (this.props.fieldValues.publicIdTwo = this.state.publicIdTwo), (this.props.fieldValues.publicIdThree = this.state.publicIdThree), (this.props.fieldValues.publicIdFour = this.state.publicIdFour);
  };

  PassOne(data) {
    this.setState({ publicIdOne: data });
  }
  PassTwo(data) {
    this.setState({ publicIdTwo: data });
  }
  PassThree(data) {
    this.setState({ publicIdThree: data });
  }
  PassFour(data) {
    this.setState({ publicIdFour: data });
  }

  Previous = () => {
    this.save();
    this.props.previousStep();
  };

  continue = () => {
    this.save();
    this.props.nextStep();
  };

  render() {
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
                  <h2>Photos</h2>
                </Title>
                <ImageCloudinary
                  heightPhoto={281}
                  widthPhoto={496}
                  heightContainer={285}
                  widthContainer={500}
                  publicId={this.state.publicIdOne}
                  passData={data => this.PassOne(data)}
                />
                <StyleImage2>
                  <ImageCloudinary
                    heightPhoto={87}
                    widthPhoto={155}
                    heightContainer={91}
                    widthContainer={159}
                    publicId={this.state.publicIdTwo}
                    passData={data => this.PassTwo(data)}
                  />
                  <ImageCloudinary
                    heightPhoto={87}
                    widthPhoto={155}
                    heightContainer={91}
                    widthContainer={159}
                    publicId={this.state.publicIdThree}
                    passData={data => this.PassThree(data)}
                  />
                  <ImageCloudinary
                    heightPhoto={87}
                    widthPhoto={155}
                    heightContainer={91}
                    widthContainer={159}
                    publicId={this.state.publicIdFour}
                    passData={data => this.PassFour(data)}
                  />
                </StyleImage2>
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

export default Photo;

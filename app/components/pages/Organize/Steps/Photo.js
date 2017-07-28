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
  save = () => {
    (this.props.fieldValues.publicIdOne =
      One.publicId), (this.props.fieldValues.publicIdTwo =
      Two.publicId), (this.props.fieldValues.publicIdThree =
      Three.publicId), (this.props.fieldValues.publicIdFour = Four.publicId);
  };

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
                  fieldValues={One}
                />
                <StyleImage2>
                  <ImageCloudinary
                    heightPhoto={87}
                    widthPhoto={155}
                    heightContainer={91}
                    widthContainer={159}
                    fieldValues={Two}
                  />
                  <ImageCloudinary
                    heightPhoto={87}
                    widthPhoto={155}
                    heightContainer={91}
                    widthContainer={159}
                    fieldValues={Three}
                  />
                  <ImageCloudinary
                    heightPhoto={87}
                    widthPhoto={155}
                    heightContainer={91}
                    widthContainer={159}
                    fieldValues={Four}
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

import React from "react";

import { ICONS } from "./Icons";
import Icon from "components/genericComponents/Icon";
import StyleImage from "./StyleImage";
import theme, { animations } from "../../../../utils/theme";
import Column from "../../../genericComponents/Container/Column";
import Column4 from "../../../genericComponents/Container/Column4";
import Column5 from "../../../genericComponents/Container/Column5";
import Container from "../../../genericComponents/Container";
import FlexWrapper from "../../../genericComponents/Container/FlexWrapper";
import StyleIcon from "./StyleIcon";

export class IconsRender extends React.Component {
  saveOne = () => {
    this.props.save();
    this.props.stepOne();
  };
  saveTwo = () => {
    this.props.save();
    this.props.stepTwo();
  };
  saveThree = () => {
    this.props.save();
    this.props.stepThree();
  };
  saveFour = () => {
    this.props.save();
    this.props.stepFour();
  };
  render() {
    return (
      <StyleImage>
        <StyleIcon>
          <button onClick={this.saveOne}>
            <Icon
              icon={ICONS.BLACK_SEE_THROUGH.SVG}
              viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
              color={theme.colors.cook}
            />
            <br /> Présentation de votre atelier
          </button>
        </StyleIcon>
        <StyleIcon>
          <button onClick={this.saveTwo}>
            <Icon
              icon={ICONS.BLACK_SEE_THROUGH.SVG}
              viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
              color={theme.colors.cook}
            />
            <br /> Photos
          </button>
        </StyleIcon>
        <StyleIcon>
          <button onClick={this.saveThree}>
            <Icon
              icon={ICONS.BLACK_SEE_THROUGH.SVG}
              viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
              color={theme.colors.cook}
            />
            <br /> Informations pratiques
          </button>
        </StyleIcon>
        <StyleIcon>
          <button onClick={this.saveFour}>
            <Icon
              icon={ICONS.BLACK_SEE_THROUGH.SVG}
              viewBox={ICONS.BLACK_SEE_THROUGH.VIEWBOX}
              color={theme.colors.cook}
            />
            <br /> Remarques
          </button>
        </StyleIcon>
      </StyleImage>
    );
  }
}

export default IconsRender;

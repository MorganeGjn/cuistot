import React from "react";

import Comments from "./Comments";
import GlobalInfo from "./GlobalInfo";
import Photo from "./Photo";
import PracticalInfo from "./PracticalInfo";
import IconsRender from "./IconsRender";
import Column from '../../../genericComponents/Container/Column';
import Column4 from '../../../genericComponents/Container/Column4';
import Column5 from '../../../genericComponents/Container/Column5';
import Container from '../../../genericComponents/Container';
import FlexWrapper from '../../../genericComponents/Container/FlexWrapper';

var fieldValues = {
Title     : null,
Recipes    : null,
Description : null,
Image      : null,
PersonNumber    : null,
date     : null,
Hours    : null,
Minutes  : null,
Price    : null,
Comments      : null,
}

export class Steps extends React.Component {

  state = {
    step: 1
  }

nextStep = () => this.setState({step: this.state.step + 1})
previousStep = () => this.setState({step: this.state.step - 1})
stepOne = () => this.setState({step: 1})
stepTwo = () => this.setState({step: 2})
stepThree = () => this.setState({step: 3})
stepFour = () => this.setState({step: 4})


  render() {

     switch (this.state.step) {
      case 1:
        return(
          <GlobalInfo         fieldValues={fieldValues}
                              nextStep = {() => this.nextStep()}
                              stepOne={() => this.stepOne()}
                              stepTwo={() => this.stepTwo()}
                              stepThree={() => this.stepThree()}
                              stepFour={() => this.stepFour()}

                              />
                            );
      case 2:
        return (
          <Photo fieldValues={fieldValues}
                             nextStep = {() => this.nextStep()}
                             previousStep = {() => this.previousStep()}
                             stepOne={() => this.stepOne()}
                             stepTwo={() => this.stepTwo()}
                             stepThree={() => this.stepThree()}
                             stepFour={() => this.stepFour()}
                             />
        );
      case 3:
        return (
        <PracticalInfo fieldValues={fieldValues}
                             nextStep={()=>this.nextStep()}
                             previousStep={()=>this.previousStep()}
                             stepOne={() => this.stepOne()}
                             stepTwo={() => this.stepTwo()}
                             stepThree={() => this.stepThree()}
                             stepFour={() => this.stepFour()}
                             />
                           );
      case 4:
        return (
        <Comments fieldValues={fieldValues}
                         submitRegistration={()=>this.submitRegistration()}
                         previousStep={()=>this.previousStep()}
                         stepOne={() => this.stepOne()}
                         stepTwo={() => this.stepTwo()}
                         stepThree={() => this.stepThree()}
                         stepFour={() => this.stepFour()}
                         />
      );
    }
  }
}

export default Steps;

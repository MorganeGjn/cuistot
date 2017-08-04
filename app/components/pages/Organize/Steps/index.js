import React from "react";

import Comments from "./Comments";
import GlobalInfo from "./GlobalInfo";
import Photo from "./Photo";
import PracticalInfo from "./PracticalInfo";
import { gql, graphql } from "react-apollo";
import uuidV1 from "uuid/v1";

export class Steps extends React.Component {
  state = {
    step: 1
  };

  nextStep = () => this.setState({ step: this.state.step + 1 });
  previousStep = () => this.setState({ step: this.state.step - 1 });
  stepOne = () => this.setState({ step: 1 });
  stepTwo = () => this.setState({ step: 2 });
  stepThree = () => this.setState({ step: 3 });
  stepFour = () => this.setState({ step: 4 });

  submitKitchen = () => {
    if (this.props.fieldValues.Location == "Autre") {
      const id = uuidV1();
      this.props
        .mutate({
          variables: {
            kitchen_id: id,
            name: this.props.fieldValues.OtherName,
            city: this.props.fieldValues.OtherCity,
            cp: this.props.fieldValues.OtherCp
          }
        })
        .then(({ data }) => {
          console.log("got data", data);
          localStorage.setItem("kitchenId", id);
        })
        .catch(error => {
          console.log("there was an error sending the query", error);
        });
    }
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <GlobalInfo
            fieldValues={this.props.fieldValues}
            nextStep={() => this.nextStep()}
            stepOne={() => this.stepOne()}
            stepTwo={() => this.stepTwo()}
            stepThree={() => this.stepThree()}
            stepFour={() => this.stepFour()}
          />
        );
      case 2:
        return (
          <Photo
            fieldValues={this.props.fieldValues}
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            stepOne={() => this.stepOne()}
            stepTwo={() => this.stepTwo()}
            stepThree={() => this.stepThree()}
            stepFour={() => this.stepFour()}
          />
        );
      case 3:
        return (
          <PracticalInfo
            fieldValues={this.props.fieldValues}
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            stepOne={() => this.stepOne()}
            stepTwo={() => this.stepTwo()}
            stepThree={() => this.stepThree()}
            stepFour={() => this.stepFour()}
          />
        );
      case 4:
        return (
          <Comments
            fieldValues={this.props.fieldValues}
            submitRegistration={() => this.submitRegistration()}
            previousStep={() => this.previousStep()}
            stepOne={() => this.stepOne()}
            stepTwo={() => this.stepTwo()}
            stepThree={() => this.stepThree()}
            stepFour={() => this.stepFour()}
            submit={() => this.props.submit()}
            submitKitchen={() => this.submitKitchen()}
          />
        );
    }
  }
}

const addKitchen = gql`
  mutation addKitchen(
    $kitchen_id: ID
    $name: String!
    $city: String!
    $cp: String
  ) {
    addWorkshop(kitchen_id: $kitchen_id, name: $name, city: $city, cp: $cp) {
      kitchen_id
      name
      city
      cp
      location
    }
  }
`;

const NewEntryWithData = graphql(addKitchen)(Steps);

export default NewEntryWithData;

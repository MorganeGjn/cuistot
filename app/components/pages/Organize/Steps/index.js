import React from "react";

import Comments from "./Comments";
import GlobalInfo from "./GlobalInfo";
import Photo from "./Photo";
import PracticalInfo from "./PracticalInfo";
import { gql, graphql } from 'react-apollo';

var fieldValues = {

Title     : null,
Recipes    : null,
Description : null,
publicIdFirst    :null,
publicIdTwo    :null,
publicIdThree    :null,
publicIdFour    :null,
PersonNumber    : null,
date     : null,
Hours    : null,
Minutes  : null,
Price    : null,
duration : null,
Location : "Chez vous",
Other : null,
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
submit = (e) =>{
  e.preventDefault()
  this.props.mutate({
    variables: { name: fieldValues.Title,
                 price: fieldValues.Price,
                 duration: 2,
                 max_gourmet: fieldValues.PersonNumber,
                 min_gourmet: 0,
                 description : fieldValues.Description,
                 pictures: fieldValues.publicIdFirst,
                 workshop_date: fieldValues.date,
                 cook_id: "8e886622-4f50-11e7-86e0-1f9ee499665b"
               }
  })
  .then(({ data }) => {
   console.log('got data', data);
 }).catch((error) => {
   console.log('there was an error sending the query', error);
 });
}


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
          <Photo             fieldValues={fieldValues}
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
                         submit={e=>this.submit(e)}
                         />
      );
    }
  }
}

const addWorkshop = gql`
  mutation addWorkshop($name: String!, $price: Int!, $duration: Int!, $max_gourmet: Int!,$min_gourmet: Int!, $description : String!, $pictures: JSON, $workshop_date: Date!, $cook_id:ID) {
      addWorkshop(name: $name, price: $price, duration: $duration, max_gourmet: $max_gourmet, min_gourmet: $min_gourmet, description : $description, pictures: $pictures, workshop_date: $workshop_date, cook_id: $cook_id) {
        workshop_id
        name
        price
        duration
        min_gourmet
        max_gourmet
        description
        pictures
        kitchen_id
        cook_id
        workshop_date
    }
  }
  `;

const NewEntryWithData = graphql(addWorkshop)(Steps);

export default NewEntryWithData;

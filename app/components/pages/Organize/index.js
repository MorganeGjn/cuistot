import React from "react";
import Steps from "./Steps/index";
import Header from "../../genericComponents/HeaderPages";
import { gql, graphql } from "react-apollo";

var fieldValues = {
  Title: null,
  Recipes: null,
  Description: null,
  publicIdOne: "",
  publicIdTwo: "",
  publicIdThree: "",
  publicIdFour: "",
  PersonNumber: null,
  date: null,
  Hours: null,
  Minutes: null,
  Price: null,
  duration: null,
  Location: "Chez vous",
  OtherName: null,
  OtherCity: null,
  OtherCp: null,
  Comments: null
};

export class Organize extends React.Component {
  submit = () => {
    this.props
      .mutate({
        variables: {
          name: fieldValues.Title,
          price: fieldValues.Price,
          duration: fieldValues.duration,
          max_gourmet: fieldValues.PersonNumber,
          min_gourmet: 0,
          description: fieldValues.Description,
          pictures: [
            fieldValues.publicIdOne,
            fieldValues.publicIdTwo,
            fieldValues.publicIdThree,
            fieldValues.publicIdThree
          ],
          workshop_date: fieldValues.date,
          cook_id: localStorage.getItem("token")
        }
      })
      .then(({ data }) => {
        console.log("got data", data);
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  };

  render() {
    return (
      <div>
        <Header logout={this.props.logout} />
        <Steps submit={() => this.submit()} fieldValues={fieldValues} />
      </div>
    );
  }
}

const addWorkshop = gql`
  mutation addWorkshop(
    $name: String!
    $price: Int!
    $duration: Int!
    $max_gourmet: Int!
    $min_gourmet: Int!
    $description: String!
    $pictures: JSON
    $workshop_date: Date!
    $cook_id: ID
  ) {
    addWorkshop(
      name: $name
      price: $price
      duration: $duration
      max_gourmet: $max_gourmet
      min_gourmet: $min_gourmet
      description: $description
      pictures: $pictures
      workshop_date: $workshop_date
      cook_id: $cook_id
    ) {
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

const NewEntryWithData = graphql(addWorkshop)(Organize);

export default NewEntryWithData;

import React from "react";
import Steps from "./Steps/index";
import Header from "../../genericComponents/HeaderPages";

export class Organize extends React.Component {
  render() {
    return (
      <div>
        <Header logout={() => this.props.logout()} />
        <Steps />
      </div>
    );
  }
}

export default Organize;

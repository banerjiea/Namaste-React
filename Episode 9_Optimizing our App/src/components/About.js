import React from "react";

import UserClass from "./UserClass";
import User from "./User";
class About extends React.Component {
  constructor(props) {
    super(props);
    //  console.log("Parent Constructor");
  }
  componentDidMount() {
    //  console.log("Parent Component Did Mount");
  }
  render() {
    //  console.log("Parent Render");
    return (
      <div>
        <h1>This is About Us page</h1>
        <User name={"Samik"} />
        <UserClass name={"Soubhik"} location={"Kolkata"} />
        {/*Lifecycle Check for multiple children 
         <UserClass name={"Samik"} location={"Kolkata"} /> */}
      </div>
    );
  }
}

export default About;

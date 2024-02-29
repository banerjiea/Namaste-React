import React from "react";
import { ReactDOM } from "react-dom/client";
import { createRoot } from "react-dom/client";

//React Element
const heading = <h1 className="head">This is JSX code </h1>;

//React Functional Component
const Title = () => <h1 className="head">Namaste React using JSX</h1>;

//React Functional Component With Component Composition
// Component Composition- composing one component to another
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title />
      {heading}
      {heading}
      {Title()}
      <h1 className="heading">This is functional component</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

//To render the React Element, syntax,-

//root.render(heading);

//To render the React Functional Component, syntax,-

root.render(<HeadingComponent />);

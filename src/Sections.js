import React from "react";
import "./App.css";
import Course from "./Course";

class Sections extends React.Component {
render() {
    return <div id="sections">
        <h1>Welcome to Course Viewer!</h1>
        <h3>To get started, switch to the browse courses tab!</h3>
        <p>To find and browse courses, go to the search tab</p>
        <p>To view courses that have been added to your cart, go to the cart tab.</p>
        <p>To view and rate completed courses, go to the completed courses tab.</p>
    </div>;
  }
}

export default Sections;
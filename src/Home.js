import React from "react";
import "./App.css";
import Course from "./Course";

class Home extends React.Component {
render() {
    return <div id="home">
        <h2 class="title" id="homepage">Welcome to Course Viewer!</h2>
        <div class="home-p">
        <p>To find, browse courses, and see courses in your cart, go to the search tab</p>
        <p>To view and rate completed courses, go to the completed courses tab.</p>
        </div>
    </div>;
  }
}

export default Home;

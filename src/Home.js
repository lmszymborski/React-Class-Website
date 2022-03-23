import React from "react";
import "./App.css";
import Course from "./Course";

class Home extends React.Component {
render() {
    return <div id="home">
        <h2 class="title" id="homepage">Welcome to Course Viewer!</h2>

        <div class="home-p">
        <h2 class="title">Search</h2>
        <p>Browse through courses and limit your search results by using filters such as by keyword, subject, or credit number. Add courses to your cart by clicking the "heart" icon.</p>
        <h2 class="title">Completed Courses</h2>
        <p>View courses that you have already taken. View their description by clicking "View Description". Rate the class 1 out of 5 by clicking on the star rating.</p>

        </div>
    </div>;
  }
}

export default Home;

import React from "react";
import "./App.css";
import Course from "./Course";
import Card from "react-bootstrap/Card";


class CourseArea extends React.Component {
  getCourses() {
    let courses = [];

    if (this.props.mode === "cart") {
      // If the mode is cart, then we want to display the courses in the compact view.
      // They should also allow the user to remove the course from the cart.
      courses = this.props.cartCourses.map((course) => (
        <Card>
        <Course
          key={course.number}
          data={course}
          compactView={true}
          cartCourses={this.props.cartCourses}
          addCartCourse={this.props.addCartCourse}
          removeCartCourse={(data) => this.props.removeCartCourse(data)}
        />
        </Card>
      ));
    } else {
      // If the mode is completed courses, then we want to display the courses in the compact view.
      // Completed courses should allow the user to give the course a rating.
      if (this.props.mode === "completed") {
        courses = this.props.data.map((course) => (
          <Card className="col-6 mb-2 p-2">
          <Course
            key={course.number}
            data={course}
            compactView={true}
            ratingMode={true}
            setRating={this.props.setRating}
          />
          </Card>
        ));
      } else {
        // If no mode is specified, then we want to display the courses in the expanded view.
        // The user should be able to add/remove the course to/from the cart.
        courses = this.props.data.map((course) => (
          <Card className="col-6 mb-2 p-2">
          <Course
            key={course.number}
            data={course}
            compactView={false}
            cartCourses={this.props.cartCourses}
            addCartCourse={this.props.addCartCourse}
            removeCartCourse={this.props.removeCartCourse}
          />
          </Card>

        ));
      }
    }

    return courses;
  }

  getTitle() {
    if (this.props.mode === "cart") {
      return "Cart"
    }
    if (this.props.mode === "completed") {
      return "Completed Courses";
    }
    else {
      return "Courses"
    }
  }

  render() {
    return <div><h2 class="title">{this.getTitle()}</h2><div style={{ margin: "5px" }}>{this.getCourses()}</div></div>;
  }
}

export default CourseArea;

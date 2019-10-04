import React, { Component } from "react";
import CourseDataService from "../service/CourseDataService";

const INSTRUCTOR = "in28minutes";

class ListCoursesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      // message: null,
    };
  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses = () => {
    CourseDataService.retrieveAllCourses(INSTRUCTOR) // HARDCODED
      .then(response => {
        this.setState({ courses: response.data });
      });
  };

  render() {
    const { courses } = this.state;
    console.log("render");
    return (
      <div className="container">
        <h3>All Courses</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCoursesComponent;

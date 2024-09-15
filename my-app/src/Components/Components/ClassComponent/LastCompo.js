import React, { Component } from "react";

class LastCompo extends Component {
  render() {
    const{courses} =this.props
    return (
      <div>
        <h3>
          I have studied many courses like {courses.course1} ,{" "}
          {courses.course2},{courses.course3} ,
          {courses.course4}{" "}
        </h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default LastCompo;

import React, { Component } from "react";
import axios from "axios";

class RequestGet extends Component {
  constructor() {
    super();
    this.state = {
      value: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ value: response.data });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardd">
        {this.state.value.map((val) => (
          <div key={val.id} id="get">
            <p>Id: {val.id}</p>
            <p>Name: {val.name}</p>
            <p>Email: {val.email}</p>
            <p>Body: {val.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default RequestGet;

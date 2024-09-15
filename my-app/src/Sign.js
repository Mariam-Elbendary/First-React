import React, { Component } from "react";
import Show from "./Show";
import Login from "./Login";

class Sign extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      pass: "",
      confirmPass: "",
      date: "",
      showLog: false,
      showShow: false,
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  handleFname = (event) => {
    this.setState({ fname: event.target.value });
  };
  handleLname = (event) => {
    this.setState({ lname: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePass = (event) => {
    this.setState({ pass: event.target.value });
  };

  handleConfirm = (event) => {
    this.setState({ confirmPass: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showShow: true });
  };

  ChangeLogin = () => {
    this.setState({ showLog: true });
  };

  render() {
    if (this.state.showLog) {
      return <Login></Login>;
    }

    if (this.state.showShow) {
      return (
        <Show
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
        />
      );
    }
    
    const { fname, lname, email, pass, confirmPass } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="first">
        <div>
          <label>Your First Name</label>
          <input
            type="text"
            value={fname}
            onChange={this.handleFname}
            ref={this.myRef}
          ></input>
        </div>
        <div>
          <label>Your Last Name</label>
          <input type="text" value={lname} onChange={this.handleLname}></input>
        </div>
        <div>
          <label>Your Password</label>
          <input type="text" value={pass} onChange={this.handlePass}></input>
        </div>
        <div>
          <label> confirm Password</label>
          <input
            type="text"
            value={confirmPass}
            onChange={this.handleConfirm}
          ></input>
        </div>

        <div>
          <label>Your Email</label>
          <input type="text" value={email} onChange={this.handleEmail}></input>
        </div>
        <button id="sign" type="submit">
          Sign Up
        </button>
        <button id="acc" onClick={this.ChangeLogin}>
          Already have an account? Login
        </button>
      </form>
    );
  }
}

export default Sign;

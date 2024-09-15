import React, { Component } from "react";
import { ContextConsumer } from "../Context/mainContext";
import Context4 from "./Context4";

class Context3 extends Component {
  render() {
    return (
      <div id="contex">
        <div className="card">
          <ContextConsumer>
            {(value) => {
              console.log("value", value);
              return (
                <div>
                  <h1> Card 1</h1>
                  <div>
                    <h2> {` Name: ${value.name}`}</h2>
                  </div>
                  <div>
                    <h2>{` Age: ${value.age}`}</h2>
                  </div>
                  <div>
                    <h2>{` Email: ${value.email}`}</h2>
                  </div>
                  <div>
                    <h2>{` Track: ${value.track}`}</h2>
                  </div>
                  <div>
                    <h2>{` Language:  ${value.language}`}</h2>
                  </div>
                </div>
              );
            }}
          </ContextConsumer>
        </div>
        <div>
          {" "}
          <Context4 />
        </div>
      </div>
    );
  }
}

export default Context3;

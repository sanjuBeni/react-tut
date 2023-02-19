import React, { PureComponent } from "react";

class PureComponent1 extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("Check Re-render");
    return (
      <>
        <h2>Pure Component : {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Re-render
        </button>
        <button onClick={() => this.setState({ count: this.state.count })}>
          Not Render
        </button>
      </>
    );
  }
}

export default PureComponent1;

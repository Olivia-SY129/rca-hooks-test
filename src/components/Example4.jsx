// without useEffect

import React from "react";

export default class Example4 extends React.Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>you clicked {count} times</p>
        <button onClick={this.click}>Click! :D</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }

  click = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: "",
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      if (this.state.count === 10) {
        this.setState({ message: "That’s the maximum value!" });
      } else if (this.state.count === -10) {
        this.setState({ message: "That’s the minimum value!" });
      } else {
        this.setState({ message: "" });
      }
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count, message } = this.state;

    return (
      <>
        <h1>Counter {count}</h1>
        {message && <p>{message}</p>}
        <div>
          <button onClick={this.increment} disabled={count === 10}>
            Increment
          </button>
          <button onClick={this.decrement} disabled={count === -10}>
            Decrement
          </button>
        </div>
      </>
    );
  }
}

export default Counter;

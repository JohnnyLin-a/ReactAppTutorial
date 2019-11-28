import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //can do ajax here
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    /*
    if (prevProps.counter.value !== this.props.counter.value)
      //do ajax
    */
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
    //do cleanup here before component is unmounted
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  render() {
    //console.log("props", this.props);
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
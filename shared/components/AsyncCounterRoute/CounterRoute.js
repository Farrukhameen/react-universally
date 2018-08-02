/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';

class CounterRoute extends Component {
  render() {
    const { counter, onIncrementCounter } = this.props;
    return (
      <div>
        <h3>Counter</h3>
        <p>
          <em>
            This is a small demo component that contains state. It's useful for
            testing the hot reloading experience of an asyncComponent.
          </em>
        </p>
        <p>Current value: {counter}</p>
        <p>
          <button onClick={() => onIncrementCounter(counter)}>Increment</button>
        </p>
      </div>
    );
  }
}

export default CounterRoute;

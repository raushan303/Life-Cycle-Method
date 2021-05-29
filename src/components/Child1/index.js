import React, { Component } from 'react';

import Child2 from '../Child2';

export class Index extends Component {
  constructor(props) {
    console.log('constructor');

    super(props);
    this.state = {
      val1: 0,
      val2: 0,
    };
  }

  componentWillMount() {
    console.log('will mount');
    this.setState((prevState) => ({ ...prevState, val1: 1 }));
  }

  componentDidMount() {
    console.log('Did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update', prevProps, prevState);
  }

  componentWillUpdate() {
    console.log('Will Update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  shouldComponentUpdate(nextProps, nextstate) {
    console.log('should update', nextProps, nextstate);
    return true;
  }

  componentDidCatch() {
    console.log('did catch');
  }

  componentWillReceiveProps() {
    console.log('will receive');
  }

  render() {
    console.log('render');
    return (
      <div>
        <button
          onClick={() => {
            this.setState((prevState) => ({ ...prevState, val1: prevState.val1 + 1 }));
          }}
        >
          Child1 {this.state.val1}
        </button>
        <Child2 />
      </div>
    );
  }
}

export default Index;

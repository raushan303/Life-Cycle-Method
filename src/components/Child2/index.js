import React, { Component } from 'react';

export class Index extends Component {
  constructor(props) {
    console.log('child constructor');
    super(props);
    this.state = {
      val1: 0,
      val2: 0,
    };
  }

  componentWillMount() {
    console.log('child will mount');
  }

  componentDidMount() {
    console.log('child Did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('child Did Update', prevProps, prevState);
  }

  componentWillUpdate(ppp) {
    console.log('child Will Update', ppp);
  }

  componentWillUnmount() {
    console.log('child will unmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child should update', nextProps, nextState);
    return true;
  }

  componentDidCatch() {
    console.log('child did catch');
  }

  componentWillReceiveProps() {
    console.log('child will receive');
  }
  render() {
    console.log('child render');
    return <div>Child2 {this.state.val1}</div>;
  }
}

export default Index;

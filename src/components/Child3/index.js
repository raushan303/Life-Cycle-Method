import React, { Component } from 'react';

export class Index extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      val1: 0,
      val2: 0,
    };
    // this.solve = this.solve.bind(this);
    this.call = this.call.bind(this);
  }

  solve() {
    this.setState((prevState) => ({ ...prevState, val1: prevState.val1 + 1 }));
    // console.log(this.state);
  }
  call() {
    const p1 = new Promise((resolve, reject) => {
      resolve('foo');
    });
    const p2 = new Promise((resolve, reject) => {
      reject('foo');
    });
    const p3 = new Promise((resolve, reject) => {
      resolve('foo');
    });

    p1.then(() => {
      p2.then(() => {
        p3.then(() => {
          throw 'too big';
        }).catch(() => {
          console.log('p3');
        });
      }).catch(() => {
        console.log('p2');
      });
    }).catch(() => {
      console.log('p1');
    });
  }
  render() {
    return <button onClick={this.call}>Child3 {this.state.val1}</button>;
  }
}

export default Index;

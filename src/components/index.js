import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div>
        {/* <button
          onClick={() => this.setState((prevState) => ({ ...prevState, show: !prevState.show }))}
        >
          click
        </button>
        {this.state.show && <Child1 show={this.state.show} />} */}
        <Switch>
          <Route exact path='/child' component={() => <Child1 />} />
          <Route exact path='/child3' component={Child3} />
          <Route exact path='/child/:child1/:child2' component={Child3} />
          <Redirect to='/child' />
        </Switch>
      </div>
    );
  }
}

export default Index;

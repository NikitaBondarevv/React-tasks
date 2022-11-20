import { Component } from 'react';

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init'
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    return (
      <code className={this.props.styles}>
        <span>
          The code from props is {this.props.code}
          <br />
          The code from state is {this.state.status}
        </span>
      </code>
    );
  }
}

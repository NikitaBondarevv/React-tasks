import { Component } from 'react';

import { Mount } from '../index'
import styles from './styles.css';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true,
    };
  }

  toggleBackground = () => {
    const { counter } = this.state;
    const { turquoise, green, blue, code } = styles;

    if (counter % 3 === 0 && counter % 5 === 0 && counter !== 0) {
      return turquoise;
    }
    if (counter % 3 === 0 && counter !== 0) {
      return green;
    }
    if (counter % 5 === 0 && counter !== 0) {
      return blue;
    }

    return code;
  }

  render() {
    const { counter, show } = this.state;

    return (
      <div className={styles.info}>
        <button type="button" onClick={() => this.setState({ counter: counter + 1 })}>Inc</button>
        <span className={styles.count}>{counter}</span>
        <br />
        <br />
        <button type="button" onClick={() => this.setState({ show: !show })}>
          {show ? 'Destroy' : 'Create'}
        </button>
        {show && <Mount styles={this.toggleBackground()} code={counter} />}
      </div>
    );
  }
}

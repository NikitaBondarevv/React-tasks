import { Component } from 'react';

import { Mount } from '../index'
import styles from './styles.css';

export class Content extends Component {
  state = {
    counter: 0,
    show: true,
  };

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

  increaseNumber = () => {
    const { counter } = this.state;
    
    this.setState({ counter: counter + 1 });
  }

  toggleShowHide = () => {
    const { show } = this.state;

    this.setState({ show: !show });
  }

  render() {
    const { counter, show } = this.state;

    return (
      <div className={styles.info}>
        <button type="button" onClick={this.increaseNumber}>Inc</button>
        <span className={styles.count}>{counter}</span>
        <br />
        <br />
        <button type="button" onClick={this.toggleShowHide}>
          {show ? 'Destroy' : 'Create'}
        </button>
        {show && <Mount styles={this.toggleBackground()} code={counter} />}
      </div>
    );
  }
}

import { Component } from 'react';

import styles from './styles.css';

const Mount = ({ styles, code }) => (
  <code className={styles}>
    <span>
      The code from props is {code}
      <br />
      The code from state is init
    </span>
  </code>
)

export class Content extends Component {
  state = {
    counter: 0,
    show: true
  };

  getBackgroundColor = () => {
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
        {show && <Mount styles={this.getBackgroundColor()} code={counter} />}
      </div>
    );
  }
}

import { Component } from 'react';

import styles from './styles.css';

export class Clock extends Component {
  state = {
    time: new Date(),
    show: true
  }

  setTime = () => {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.setTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { time, show } = this.state;

    return (
      <div className={styles.clock}>
        <button type="button" className={styles.button} onClick={() => this.setState({ show: !show }, this.componentWillUnmount)}>
          {show ? 'Hide' : 'Show'}
        </button>
        <p className={styles.date}>{show && time.toLocaleDateString()}</p>
        <time>{show && time.toLocaleTimeString()}</time>
      </div>
    )
  }
}

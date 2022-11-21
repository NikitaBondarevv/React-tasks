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
      <div>
        {show && <p className={styles.date}>{time.toLocaleDateString()}</p>}
        {show && <time>{time.toLocaleTimeString()}</time>}
      </div>
    )
  }
}

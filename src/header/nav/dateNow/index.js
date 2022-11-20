import { Component } from 'react';

import styles from './styles.css';
import { Clock } from './clock';

export class DateNow extends Component {
  state = {
    display: true
  }

  deleteComponent = () => {
    const { display } = this.state;

    this.setState({ display: !display });
  }

  render() {
    const { display } = this.state;

    return (
      <div className={styles.clock}>
        <button type="button" className={styles.button} onClick={this.deleteComponent}>
          {display ? 'Hide' : 'Show'}
        </button>
        {display && <Clock />}
      </div>
    )
  }
}

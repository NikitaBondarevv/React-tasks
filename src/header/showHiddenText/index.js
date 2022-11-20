import { Component } from 'react';

import styles from './styles.css'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export class ShowHiddenText extends Component {
  state = {
    show: true
  };

  showHiddenText = () => {
    this.setState({show: this.state.show ? false : true});
  }

  render() {
    const { show } = this.state;
    
    return (
      <div>
        <button type="button" onClick={this.showHiddenText} className={styles.showHiddenButton}>
          {show ? 'Hide' : 'Show'}
        </button>
        <p>
          {show ? '' : text}
        </p>
      </div>
    )
  }
}

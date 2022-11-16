import { Component } from 'react';

import styles from './styles.css'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export class ShowHiddenText extends Component {
  state = {
    text: '',
    textButton: 'Show'
  };

  showHiddenText = () => {
    this.setState(
      {
        text: this.state.text ? '' : text,
        textButton: this.state.textButton === 'Show' ? 'Hide' : 'Show'
      },
    )
  }

  render() {
    const { text, textButton } = this.state;
    return (
      <div>
        <button type="button" onClick={this.showHiddenText} className={styles.showHiddenButton}>
          {textButton}
        </button>
        <p>
          {text}
        </p>
      </div>
    )
  }
}

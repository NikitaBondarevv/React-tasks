import { Component } from 'react';

import styles from './styles.css'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export class ShowHiddenText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      textButton: 'Show'
    };
  }

  showHiddenText = () => {
    this.setState((prevState) => {
      if (prevState.text === '') {
        return {
          text: prevState.text = text,
          textButton: prevState.textButton = 'Hide'
        }
      }

      return {
        text: '',
        textButton: 'Show'
      }
    })
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

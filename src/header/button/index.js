import { Component } from 'react';

import styles from './styles.css'

export class Button extends Component {
  state = {
    active: ''
  }

  addClassActive = () => {
    this.setState({ active: this.state.active ? '' : styles.active });
  }

  render() {
    const { active } = this.state;
    return (
      <button type="button" onClick={this.addClassActive} className={`${active} ${styles.button}`}>
        Click
      </button>
    )
  }
}

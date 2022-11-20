import { Component } from 'react';

import styles from './styles.css'

export class Button extends Component {
  state = {
    active: ''
  }

  toggleClassActive = () => {
    this.setState({ active: this.state.active ? '' : styles.active });
  }

  render() {
    const { active } = this.state;
    return (
      <button type="button" onClick={this.toggleClassActive} className={`${active} ${styles.button}`}>
        Click
      </button>
    )
  }
}

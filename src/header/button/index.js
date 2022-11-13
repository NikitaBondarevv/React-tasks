import { Component } from 'react';

import styles from './styles.css'

export class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: ''
    }
  }

  addClassActive = () => {
    this.setState((prevState) => {
      if (prevState.active === '') {
        return { active: prevState.active = styles.active }
      }

      return { active: '' }
    })
  }

  render() {
    const { active } = this.state;
    return (
      <button type="button" onClick={this.addClassActive} id={styles.button} className={active}>
        Click
      </button>
    )
  }
}

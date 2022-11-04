import { createElement } from 'react';
import styles from '../index.css'

const nav = createElement('nav', null, 'navigation');
export const header = createElement('header', { className: styles.header }, nav);
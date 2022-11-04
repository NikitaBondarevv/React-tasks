import { createElement } from 'react';
import styles from '../index.css'

const aside = createElement('aside', null, 'aside');
const content = createElement('div', {  className: 'content' }, 'content')
export const main = createElement('main', { className: styles.main }, aside, content);
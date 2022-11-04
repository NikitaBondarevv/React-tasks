import { Fragment, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { header } from './src/header';
import { main } from './src/main';
import { footer } from './src/footer';

const root = createRoot(document.getElementById('app'));

const print = () => {
  const element = createElement(Fragment, null, header, main, footer)

  root.render(element);
}

print();
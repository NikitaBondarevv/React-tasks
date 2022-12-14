import { createRoot } from 'react-dom/client';

import { Header } from './src/header';
import { Main } from './src/main';
import { Footer } from './src/footer';

const root = createRoot(document.getElementById('app'));
const App = (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

root.render(App);

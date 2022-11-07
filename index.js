import { Header } from './src/header';
import { Main } from './src/main';
import { Footer } from './src/footer';
import { createRoot } from 'react-dom/client';

const root = createRoot( document.getElementById('app') );
const component = (
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
);

root.render(component);

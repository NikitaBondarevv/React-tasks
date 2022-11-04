import { Header } from './src/header/header';
import { Main } from './src/main/main';
import { Footer } from './src/footer/footer';
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

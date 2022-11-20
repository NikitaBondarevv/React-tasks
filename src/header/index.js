import styles from './styles.css';
import { Nav } from './nav';
import { Button } from './button';
import { ShowHiddenText } from './showHiddenText';

export const Header = () => (
  <header className={styles.header}>
    <Nav list={['Home', 'Products', 'Contacts']} />
    <Button />
    <ShowHiddenText />
  </header>
);

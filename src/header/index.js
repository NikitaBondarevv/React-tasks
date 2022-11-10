import styles from './styles.css';
import { Nav } from './nav';

export const Header = () => (
  <header className={styles.header}>
    header
    <Nav list={['Home', 'Products', 'Contacts']} />
  </header>
);

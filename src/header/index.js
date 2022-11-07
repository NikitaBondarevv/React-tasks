import styles from './styles.css';

const Nav = ({ list }) => (
  <nav className={styles.nav}>
    <ul className={styles.ul}>
      {
      list
        .map((item, index) => <li className={styles.li} href={`/${item.toLocaleLowerCase()}`} key={index}>{item}</li>)
      }
    </ul>
  </nav>
);

export const Header = () => (
  <header className={styles.header}>
    header
    <Nav list={['Home', 'Products', 'Contacts']} />
  </header>
);

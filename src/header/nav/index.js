import styles from './styles.css';

export const Nav = ({ list }) => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      {
      list
        .map((item, index) => <li className={styles.points} href={`/${item.toLocaleLowerCase()}`} key={index}>{item}</li>)
      }
    </ul>
  </nav>
);

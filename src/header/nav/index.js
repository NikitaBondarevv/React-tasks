import styles from './styles.css';
import { DateNow } from './dateNow'

export const Nav = ({ list }) => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      {
        list
          .map(
            (
              item,
              index
            ) => <li className={styles.points} key={index}><a href={`/${item.toLocaleLowerCase()}`}>{item}</a></li>
          )
      }
    </ul>
    <DateNow />
  </nav>
);

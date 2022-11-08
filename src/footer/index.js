import styles from './styles.css';

const listNumbers = (from, to) => {
  const list = [];

  for (let i = from; i <= to; i++) {
    list.push(i);
  }

  return list;
};

const ListOfNumbers = ({
  from, to, odd, even
}) => (
  <ul className={styles.ul}>
    {
      even ? listNumbers(from, to)
        .filter((number) => number % 2 === 0)
        .map((number) => <li className={styles.li} key={number}>{number}</li>)
        : odd ? listNumbers(from, to)
          .filter((number) => number % 2 !== 0)
          .map((number) => <li className={styles.li} key={number}>{number}</li>)
          : listNumbers(from, to)
            .map((number) => <li className={styles.li} key={number}>{number}</li>)
    }
  </ul>
);

export const Footer = () => (
  <footer className={styles.footer}>
    <ListOfNumbers from="1" to="20" even />
  </footer>
);

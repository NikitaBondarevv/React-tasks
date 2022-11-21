import styles from './styles.css';

const listNumbers = (from, to) => {
  const list = [];

  for (let i = from; i <= to; i++) {
    list.push(i);
  }

  return list;
};

const Numbers = ({ from, to, odd, even }) => {
  let list = listNumbers(from, to);

  if (odd) {
    list = list.filter((number) => number % 2 !== 0);
  }

  if (even) {
    list = list.filter((number) => number % 2 === 0);
  }

  return list.map((number) => <li className={styles.points} key={number}>{number}</li>);
}

const ListOfNumbers = ({
  from, to, odd, even
}) => (
  <ul className={styles.list}>
    <Numbers from={from} to={to} odd={odd} even={even} />
  </ul>
);

const User = ({ name, surname, age }) => (
  <span>{`${name} ${surname} ${age}`}</span>
);

export const Footer = () => (
  <footer className={styles.footer}>
    <ListOfNumbers from="1" to="20" even />
    <User name="Nikita" surname="Bondarev" age="21" />
  </footer>
);

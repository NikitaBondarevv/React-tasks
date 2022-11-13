import styles from './styles.css';

const listNumbers = (from, to) => {
  const list = [];

  for (let i = from; i <= to; i++) {
    list.push(i);
  }

  return list;
};

const Numbers = (props) => {
  let list = listNumbers(props.from, props.to);

  if (props.odd) {
    list = listNumbers(props.from, props.to).filter((number) => number % 2 !== 0);
  }

  if (props.even) {
    list = listNumbers(props.from, props.to).filter((number) => number % 2 === 0);
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

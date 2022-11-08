import styles from './styles.css';

const listNumbers = (from, to) => {
  const list = [];

  for (let i = from; i <= to; i++) {
    list.push(i);
  }

  return list;
};

const Numbers = (props) => {
  if (props.odd) {
    return listNumbers(props.from, props.to).filter((number) => number % 2 !== 0)
      .map((number) => <li className={styles.list} key={number}>{number}</li>);
  }

  if (props.even) {
    return listNumbers(props.from, props.to).filter((number) => number % 2 === 0)
      .map((number) => <li className={styles.list} key={number}>{number}</li>);
  }

  return listNumbers(props.from, props.to).map((number) => <li className={styles.points} key={number}>{number}</li>);
}

const ListOfNumbers = ({
  from, to, odd, even
}) => (
  <ul className={styles.list}>
    <Numbers from={from} to={to} odd={odd} even={even} />
  </ul>
);

const time = () => {
  const hours = new Date().getHours();

  if (hours >= 22 || hours < 3) {
    return 'Good night!';
  }
  if (hours >= 3 && hours < 12) {
    return 'Good morning!';
  }
  if (hours >= 12 && hours < 18) {
    return 'Good afternoon!';
  }
  if (hours >= 18 && hours < 22) {
    return 'Good evening!';
  }
};

const Greetings = ({ name }) => (

  <p>
    {name ? `${time().replace('!', '')}, ${name} !` : time()}
  </p>
);

const User = ({ name, surname, age }) => (
  <span>{`${name} ${surname} ${age}`}</span>
);

const ListUsers = ({ user }) => (
  <div>
    {user.map((user, index) => <User key={index} name={user.name} surname={user.surname} age={user.age} />)}
  </div>
);

export const Main = () => (
  <main className={styles.main}>
    <aside className={styles.aside}>
      <Greetings name="Nikita" />
      <ListUsers user={[
        {
          name: 'Nikita',
          surname: 'Bondarev',
          age: 21
        },
        {
          name: 'Viktoria',
          surname: 'Bondareva',
          age: 42
        }
      ]}
      />
    </aside>
    <div className={styles.content}>
      <ListOfNumbers from="1" to="20" even />
      <User name="Nikita" surname="Bondarev" age="21" />
    </div>
  </main>
);

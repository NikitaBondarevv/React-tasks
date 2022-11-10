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

const greetings = () => {
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
    {name ? `${greetings().replace('!', '')}, ${name} !` : greetings()}
  </p>
);

const Users = ({ name, surname, age }) => (
  <span>{`${name} ${surname} ${age}`}</span>
);

const ListUsers = ({ users }) => (
  <div>
    {users.map((user, index) => <Users key={index} name={user.name} surname={user.surname} age={user.age} />)}
  </div>
);

export const Main = () => (
  <main className={styles.main}>
    <aside className={styles.aside}>
      <Greetings name="Nikita" />
      <ListUsers users={[
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
      <Users name="Nikita" surname="Bondarev" age="21" />
    </div>
  </main>
);

import styles from './styles.css';

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
  <div>
    {name}
    {surname}
    {age}
  </div>
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
      <User name="Nikita" surname="Bondarev" age="21" />
    </div>
  </main>
);

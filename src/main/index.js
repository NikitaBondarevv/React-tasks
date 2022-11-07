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

export const Main = () => (
  <main className={styles.main}>
    <aside className={styles.aside}>
      <Greetings name="Nikita" />
      aside
    </aside>
    <div className={styles.content}>
      content
    </div>
  </main>
);

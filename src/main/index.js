import { Component } from 'react';

import styles from './styles.css';
import { Content } from './content'

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

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
    this.getUsers();
  }

  async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    this.setState({ users });
  }

  async getPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();

    this.setState({ posts });
  }

  render() {
    const { users, posts } = this.state;
    
    return (
      <main className={styles.main}>
        <aside className={styles.aside}>
          <Greetings name="user" />
          <ul>
            {users.map(
              (user) => (
                <li
                  className={styles.user}
                  onClick={() => this.getPosts(user.id)}
                  key={user.id}
                >
                  {user.name}
                </li>
              )
            )}
          </ul>
        </aside>
        <div className={styles.content}>
          <ul className={styles.posts}>
            Posts:
            {posts.map((post, index) => <li className={styles.post} key={index}>{post.body}</li>)}
          </ul>
        </div>
        <Content />
      </main>
    )
  }
}

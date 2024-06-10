import DefaultLink from '@/shared/uikit/links/DefaultLink';
import styles from './auth.module.scss';

const links = [
  { route: '/signup', text: 'SignUp' },
  { route: '/signin', text: 'Sign In' },
];

const Auth = () => {
  return (
    <section className={styles.auth}>
      {links.map(item => (
        <DefaultLink key={item.route} to={item.route}>
          {item.text}
        </DefaultLink>
      ))}
    </section>
  );
};

export default Auth;

import { accountAPI } from '@/containers/account/services/AccountService';
import UserCard from '@/shared/uikit/cards/UserCard';
import styles from './people.module.scss';

const People = () => {
  const { data } = accountAPI.useGetListQuery();

  return (
    <section className={styles.people}>
      {data?.map(item => (
        <UserCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default People;

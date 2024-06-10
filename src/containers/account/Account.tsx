import Editor from '@/containers/account/components/Editor';
import { accountAPI } from '@/containers/account/services/AccountService';
import Button from '@/shared/uikit/buttons/Button';
import UserCard from '@/shared/uikit/cards/UserCard';
import { useState } from 'react';
import styles from './account.module.scss';

const Account = () => {
  const { data } = accountAPI.useGetAccountQuery();
  const [editor, setEditor] = useState(false);

  return (
    <section className={styles.account}>
      <UserCard data={data} />
      <div className={styles.btn_wrap}>
        <Button text="Edit profile" type="button" onClick={() => setEditor(!editor)} />
      </div>
      {editor && <Editor handleClose={() => setEditor(false)} />}
    </section>
  );
};

export default Account;

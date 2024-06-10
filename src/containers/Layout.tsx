import { accountAPI } from '@/containers/account/services/AccountService';
import { deleteRememberMe } from '@/containers/auth/services/RememberMeSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import BackButton from '@/shared/uikit/buttons/BackButton';
import Button from '@/shared/uikit/buttons/Button';
import DefaultLink from '@/shared/uikit/links/DefaultLink';
import { useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout = () => {
  const isRememberMe = useAppSelector(state => state.rememberMe.isRememberMe);
  const [signOut] = accountAPI.useSignOutMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const accountPath = location.pathname === '/account';
  const isRootPath = location.pathname === '/' || accountPath;

  const handleSignOut = useCallback(() => {
    signOut();
    window.dispatchEvent(new CustomEvent('tokenRefreshed', { detail: '' }));
    localStorage.removeItem('token');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('refreshToken');
    dispatch(deleteRememberMe());
  }, [dispatch, signOut]);

  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        {!isRootPath && <BackButton />}
        {accountPath && (
          <div className={styles.link_wrap}>
            <DefaultLink to="/people">All accounts</DefaultLink>
          </div>
        )}
        {isRememberMe && (
          <div className={styles.signout_wrap}>
            <Button text="Sign Out" type="button" onClick={handleSignOut} />
          </div>
        )}
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;

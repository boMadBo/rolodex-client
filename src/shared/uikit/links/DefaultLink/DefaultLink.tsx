import React from 'react';
import { Link } from 'react-router-dom';
import styles from './defaultLink.module.scss';

interface Props {
  to: string;
  children: string;
}

const DefaultLink = ({ to, children }: Props) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

export default React.memo(DefaultLink);

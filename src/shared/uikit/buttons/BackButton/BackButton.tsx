import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './backButton.module.scss';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <MdKeyboardBackspace />
      <span>Go back</span>
    </button>
  );
};

export default React.memo(BackButton);

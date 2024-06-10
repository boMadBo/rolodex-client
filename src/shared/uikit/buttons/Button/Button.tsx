import React from 'react';
import styles from './button.module.scss';

interface Props {
  text: string;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ text, type, disabled, onClick }: Props) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default React.memo(Button);

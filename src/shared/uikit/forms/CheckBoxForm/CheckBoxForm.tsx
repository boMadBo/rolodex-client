import React from 'react';
import styles from './checkBoxForm.module.scss';

interface Props {
  text: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxForm = ({ text, checked, onChange }: Props) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor="" className={styles.text}>
        {text}
      </label>
    </div>
  );
};

export default React.memo(CheckBoxForm);

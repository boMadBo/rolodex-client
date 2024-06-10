import React from 'react';
import styles from './dateForm.module.scss';

interface Props {
  value: string;
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateForm = ({ value, text, onChange }: Props) => {
  return (
    <div className={styles.date_wrap}>
      <span className={styles.name}>{text}</span>
      <div className={styles.date}>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={value}
          min="1950-01-01"
          max="2012-12-31"
          onChange={onChange}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default React.memo(DateForm);

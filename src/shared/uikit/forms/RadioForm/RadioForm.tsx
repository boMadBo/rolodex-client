import { Field } from 'formik';
import React from 'react';
import styles from './radioForm.module.scss';

interface Props {
  name: string;
  text: string;
  toggleOption: string;
  data: string[];
  handleToggle: (value: string) => void;
}

const RadioForm = ({ name, text, toggleOption, data, handleToggle }: Props) => {
  return (
    <div className={styles.radio}>
      <span>{text}</span>
      <div className={styles.radio_group}>
        {data.map(item => (
          <label key={item}>
            <Field
              type="radio"
              name={name}
              value={item}
              checked={toggleOption === item}
              onChange={() => handleToggle(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RadioForm);

import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';
import styles from './inputForm.module.scss';

const InputForm = ({ name, ...props }: any) => {
  const [field, meta] = useField({ name });

  const { onBlur, value } = field;
  const { touched, error } = meta;
  return (
    <div className={styles.field}>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={name}
        value={value}
        placeholder={props.label}
        onChange={field.onChange}
        onBlur={onBlur}
        className={clsx(styles.input, touched && Boolean(error) && styles.input_error)}
      />
      {touched && Boolean(error) && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default React.memo(InputForm);

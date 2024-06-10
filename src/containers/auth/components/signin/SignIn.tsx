import { authAPI } from '@/containers/auth/services/AuthService';
import { saveRememberMe } from '@/containers/auth/services/RememberMeSlice';
import { SignInSchema, initialSignInValues } from '@/containers/auth/shemas';
import { ISignInData } from '@/containers/auth/types';
import { saveLoginTokens } from '@/containers/auth/utils';
import { useAppDispatch } from '@/shared/hooks/hooks';
import Button from '@/shared/uikit/buttons/Button';
import CheckBoxForm from '@/shared/uikit/forms/CheckBoxForm';
import InputForm from '@/shared/uikit/forms/InputForm';
import { Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './signin.module.scss';

const forms = [
  { name: 'email', type: 'email', label: 'Your email' },
  { name: 'password', type: 'password', label: 'Your password' },
];

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [createSignIn, { isSuccess }] = authAPI.useUseSignInMutation();
  const dispatch = useAppDispatch();

  const handleSubmitData = async (values: ISignInData) => {
    try {
      const response = await createSignIn(values);
      saveLoginTokens(response);
      const error = 'error' in response;
      if (!error) dispatch(saveRememberMe());
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleRememberMe = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setRememberMe(checked);
    localStorage.setItem('rememberMe', checked.toString());
  }, []);

  if (isSuccess) {
    return <Navigate to={'/account'} />;
  }

  return (
    <section className={styles.signin}>
      <Formik
        initialValues={initialSignInValues}
        validateOnBlur
        validationSchema={SignInSchema}
        onSubmit={handleSubmitData}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className={styles.forms}>
            {forms.map(form => (
              <InputForm key={form.name} name={form.name} type={form.type} label={form.label} />
            ))}
            <CheckBoxForm text="Remember me" checked={rememberMe} onChange={handleRememberMe} />
            <div className={styles.btn_wrap}>
              <Button text="Send" type="submit" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default React.memo(SignIn);

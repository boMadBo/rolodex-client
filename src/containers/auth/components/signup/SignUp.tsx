import { authAPI } from '@/containers/auth/services/AuthService';
import { SignUpSchema, initialSignUpValues } from '@/containers/auth/shemas';
import { ISignUpData } from '@/containers/auth/types';
import { useFileInput } from '@/shared/hooks/useFileInput';
import Button from '@/shared/uikit/buttons/Button';
import DateForm from '@/shared/uikit/forms/DateForm';
import ImageDownloader from '@/shared/uikit/forms/ImageDownloader';
import InputForm from '@/shared/uikit/forms/InputForm';
import RadioForm from '@/shared/uikit/forms/RadioForm';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './signup.module.scss';

const forms = [
  { name: 'firstName', type: 'text', label: 'Your first name' },
  { name: 'lastName', type: 'text', label: 'Your last name' },
  { name: 'email', type: 'email', label: 'Your email' },
  { name: 'password', type: 'password', label: 'Your password' },
];

const radios = ['Male', 'Female'];

const SignUp = () => {
  const [gender, setGender] = useState('');
  const [createSignUp, { isSuccess }] = authAPI.useUseSignUpMutation();
  const { selectedFile, previewUrl, handleFileChange } = useFileInput();

  const handleSubmitData = async (values: ISignUpData) => {
    const isMale = gender === 'Male' ? true : false;
    const formData = new FormData();

    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('birthDate', values.birthDate);
    formData.append('isMale', isMale.toString());
    formData.append('file', '');

    if (selectedFile) {
      formData.append('file', selectedFile, selectedFile.name);
    }

    try {
      await createSignUp(formData);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  if (isSuccess) {
    return <Navigate to={'/signin'} />;
  }

  return (
    <section className={styles.signup}>
      <Formik
        initialValues={initialSignUpValues}
        validateOnBlur
        validationSchema={SignUpSchema}
        onSubmit={handleSubmitData}
      >
        {({ handleSubmit, values, setFieldValue, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className={styles.forms}>
            {forms.map(form => (
              <InputForm key={form.name} name={form.name} type={form.type} label={form.label} />
            ))}
            <RadioForm name="gender" text="Your male" data={radios} toggleOption={gender} handleToggle={setGender} />
            <DateForm
              value={values.birthDate}
              text="Your birthday"
              onChange={e => setFieldValue('birthDate', e.target.value)}
            />
            <ImageDownloader previewUrl={previewUrl} onChange={handleFileChange} />
            <Button text="Send" type="submit" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default React.memo(SignUp);

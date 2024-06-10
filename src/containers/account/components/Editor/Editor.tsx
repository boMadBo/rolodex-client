import { accountAPI } from '@/containers/account/services/AccountService';
import { EditSchema, initialEditValues } from '@/containers/account/shemas';
import { IUserUpdateValues } from '@/containers/account/types';
import { useFileInput } from '@/shared/hooks/useFileInput';
import Button from '@/shared/uikit/buttons/Button';
import ImageDownloader from '@/shared/uikit/forms/ImageDownloader';
import InputForm from '@/shared/uikit/forms/InputForm';
import { Form, Formik } from 'formik';
import React from 'react';
import styles from './editor.module.scss';

interface Props {
  handleClose: () => void;
}

const forms = [
  { name: 'firstName', type: 'text', label: 'Your first name' },
  { name: 'lastName', type: 'text', label: 'Your last name' },
  { name: 'password', type: 'password', label: 'Your password' },
];

const Editor = ({ handleClose }: Props) => {
  const [updateUser] = accountAPI.useUpdateAccountMutation();
  const { selectedFile, previewUrl, handleFileChange } = useFileInput();

  const handleSubmitData = async (values: IUserUpdateValues) => {
    const formData = new FormData();
    const { firstName, lastName, password } = values;

    if (firstName) formData.append('firstName', firstName);
    if (lastName) formData.append('lastName', lastName);
    if (password) formData.append('password', password);
    if (selectedFile) formData.append('file', selectedFile, selectedFile.name);

    try {
      await updateUser(formData);
      handleClose();
    } catch (error) {
      console.error('Editting error:', error);
    }
  };

  return (
    <section className={styles.editor}>
      <Formik
        initialValues={initialEditValues}
        validateOnBlur
        validationSchema={EditSchema}
        onSubmit={handleSubmitData}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className={styles.forms}>
            {forms.map(form => (
              <InputForm key={form.name} name={form.name} type={form.type} label={form.label} />
            ))}
            <ImageDownloader previewUrl={previewUrl} onChange={handleFileChange} />
            <div className={styles.btn_wrap}>
              <Button text="Confirm" type="submit" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default React.memo(Editor);

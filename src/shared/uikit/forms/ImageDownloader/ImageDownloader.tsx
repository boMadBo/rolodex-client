import clsx from 'clsx';
import React from 'react';
import styles from './imageDownloader.module.scss';

interface Props {
  previewUrl: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageDownloader = ({ onChange, previewUrl }: Props) => {
  return (
    <div className={styles.downloader}>
      <div className={styles.input_wrap}>
        <input type="file" name="avatar" accept="image/*" id="fileInput" onChange={onChange} className={styles.input} />
        <div className={styles.label_wrap}>
          <label htmlFor="fileInput" className={styles.label}>
            Choose your photo
          </label>
        </div>
      </div>
      <div className={clsx(styles.image_wrap, !previewUrl && styles.image_wrap_hidden)}>
        {previewUrl && <img src={previewUrl} alt="Preview" className={styles.img} />}
      </div>
    </div>
  );
};

export default React.memo(ImageDownloader);

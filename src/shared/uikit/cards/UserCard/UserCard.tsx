import { IUserValues, TUserCollectionValues } from '@/containers/account/types';
import { EGender } from '@/shared/enums';
import { calculateYear } from '@/shared/utils';
import React, { useMemo } from 'react';
import styles from './userCard.module.scss';

interface Props {
  data: IUserValues | TUserCollectionValues | undefined;
}

const UserCard = ({ data }: Props) => {
  const gender = useMemo(() => (data?.isMale ? EGender.MALE : EGender.FEMALE), [data]);
  const age = calculateYear(data?.birthDate);

  return (
    <div className={styles.card}>
      <div className={styles.photo_wrapper}>
        {data?.avatar && <img src={data?.avatar} className={styles.photo} />}
        {!data?.avatar && <div className={styles.no_photo}>Your photo</div>}
      </div>
      <div className={styles.card_info}>
        <span>
          {data?.firstName} {data?.lastName}
        </span>
        <span>{gender}</span>
        <span>{age} years</span>
      </div>
    </div>
  );
};

export default React.memo(UserCard);

import { FC } from 'react';
import styles from './index.module.css';
import userImage from '../../../assets/UserImage1.png';
import { useAppSelector } from '../../../store/reduxHooks';

export const UserProfile: FC = () => {
  const { activeUser } = useAppSelector((state) => state.user);

  return (
    <div className={styles.wrapper}>
      <img src={userImage} className={styles.userImage} alt='Ваше фото' />
      <div className={styles.textContainer}>
        <h4>{activeUser.name}</h4>
        <span>{activeUser.post}</span>
      </div>
    </div>
  );
};

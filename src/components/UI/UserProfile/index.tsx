import { FC } from 'react';
import styles from './index.module.css';
import userImage from '../../../assets/UserImage1.png';

export const UserProfile: FC = () => {
  const { name, post } = { name: 'Dick', post: 'Manager' };
  return (
    <div className={styles.wrapper}>
      <img src={userImage} className={styles.userImage} alt='Ваше фото' />
      <div className={styles.textContainer}>
        <h4>{name}</h4>
        <span>{post}</span>
      </div>
    </div>
  );
};

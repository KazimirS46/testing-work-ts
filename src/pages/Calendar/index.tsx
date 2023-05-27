import { FC } from 'react';
import styles from './index.module.css';

export const Calendar: FC = () => {
  const TEXT = {
    pageTitle: 'Calendar',
  };
  return (
    <div className={styles.contentHead}>
      <h3>{TEXT.pageTitle}</h3>
    </div>
  );
};

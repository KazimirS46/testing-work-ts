import { FC } from 'react';
import styles from './index.module.css';

export const Report: FC = () => {
  const TEXT = {
    pageTitle: 'ReportPage',
  };
  return (
    <>
      <div className={styles.contentHead}>
        <h3>{TEXT.pageTitle}</h3>
      </div>
    </>
  );
};

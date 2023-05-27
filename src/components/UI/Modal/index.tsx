import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import { IModalProps } from '../../../types';

export const Modal: FC<IModalProps> = (props) => {
  const { isOpen, onClose, children } = props;
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el, modalRoot]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>
        <button className={styles.btnClose} onClick={onClose}></button>
        {children}
      </div>
    </div>,
    el
  );
};

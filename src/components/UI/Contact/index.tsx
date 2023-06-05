import { FC, useState } from 'react';
import styles from '../../ContactsList/index.module.css';
import { IContact } from '../../../types';
import penIcon from './assets/penButton.svg';
import delIcon from './assets/delButton.svg';
import { Modal } from '../Modal';
import { useAppDispatch } from '../../../store/reduxHooks';
import { deleteContact } from '../../../store/slice/userSlice';

export const Contact: FC<IContact> = (props) => {
  const { userData, checkedState, handleOnChange, index } = props;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<Boolean>(false);

  const onDelete = () => {
    dispatch(deleteContact(userData.id));
  };
  return (
    <>
      <tr>
        <td className={styles.firstHead}>
          <div className={styles.content}>
            <input
              type='checkbox'
              name=''
              checked={checkedState[index] && true}
              id={userData.id.toString()}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={userData.id.toString()}></label>
          </div>
        </td>
        <td className={styles.secondHead}>
          <div className={styles.content}>{userData.id}</div>
        </td>
        <td className={styles.thirdHead}>
          <div className={styles.content}>{userData.name}</div>
        </td>
        <td className={styles.fourthHead}>
          <div className={styles.content}>{userData.email}</div>
        </td>
        <td className={styles.fifthHead}>
          <div className={styles.content}>{userData.phone}</div>
        </td>
        <td className={styles.sixthHead}>
          <div className={styles.content}>{userData.address}</div>
        </td>
        <td className={styles.seventhHead}>
          <div className={styles.content}>
            <div className={styles.buttons}>
              <button onClick={() => setOpen(true)}>
                <img src={penIcon} alt='' />
              </button>
              <button onClick={onDelete}>
                <img src={delIcon} alt='' />
              </button>
            </div>
          </div>
        </td>
      </tr>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <span>Добавить форму с изменением контакта</span>
        {/* <ChangeContactForm data={userData} close={() => setOpen(false)} /> */}
      </Modal>
    </>
  );
};

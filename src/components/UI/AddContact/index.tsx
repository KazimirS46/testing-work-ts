import { FC, useState } from 'react';
import styles from './index.module.css';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import { IUserContact } from '../../../types';
import validateForm from '../../../utils/validateForm';
import { addContact } from '../../../store/slice/userSlice';

interface IProps {
  handleCloseModal: () => void;
}

export const AddContact: FC<IProps> = (props) => {
  const TEXT = {
    pageTitle: 'Add New Contact',
    nameLable: 'Client Name',
    emailLable: 'E-mail',
    phoneLabel: 'Phone Number',
    addressLabel: 'Address',
  };
  const { handleCloseModal } = props;
  const dispatch = useAppDispatch();
  const idIsCounter = useAppSelector((state) => state.user.counter);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const addData: IUserContact = {
    id: idIsCounter + 1,
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    address: inputAddress,
  };

  const adding = () => {
    if (validateForm(inputName, inputEmail, inputPhone, inputAddress)) {
      dispatch(addContact(addData));
      handleCloseModal();
    } else {
      alert('Нужно заполнить все поля');
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h2 className={styles.title}>{TEXT.pageTitle}</h2>
        <label htmlFor='name'>{TEXT.nameLable}</label>
        <input
          id='name'
          required
          type='text'
          placeholder='John Dude'
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />

        <label htmlFor='email'>{TEXT.emailLable}</label>
        <input
          id='email'
          required
          type='email'
          placeholder='user@inbox.com'
          value={inputEmail}
          onChange={(event) => setInputEmail(event.target.value)}
        />

        <label htmlFor='phone'>{TEXT.phoneLabel}</label>
        <input
          id='phone'
          required
          type='phone'
          placeholder='xxxxxxxxxxx'
          value={inputPhone}
          onChange={(event) => setInputPhone(event.target.value)}
        />

        <label htmlFor='address'>{TEXT.addressLabel}</label>
        <input
          id='address'
          required
          type='text'
          value={inputAddress}
          onChange={(event) => setInputAddress(event.target.value)}
        />
        <button type='button' className={styles.btnAdd} onClick={adding}>
          Add <span>+</span>
        </button>
      </div>
    </>
  );
};

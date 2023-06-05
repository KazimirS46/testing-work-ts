import { FC, useState } from 'react';
import styles from './index.module.css';
import { IUserContact } from '../../../types';
import { useAppDispatch } from '../../../store/reduxHooks';
import { changeContact } from '../../../store/slice/userSlice';

const TEXT = {
  pageTitle: 'Change Contact',
  nameLable: 'Client Name',
  emailLable: 'E-mail',
  phoneLabel: 'Phone Number',
  addressLabel: 'Address',
  buttonName: 'Save',
};

interface IProps {
  data: IUserContact;
  close: () => void;
}

export const ChangingContactForm: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const { id, name, email, phone, address } = props.data;

  const [inputName, setInputName] = useState<string>(name);
  const [inputEmail, setInputEmail] = useState<string>(email);
  const [inputPhone, setInputPhone] = useState<string>(phone);
  const [inputAddress, setInputAddress] = useState<string>(address);

  const changeData: IUserContact = {
    id: id,
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    address: inputAddress,
  };

  const change = () => {
    dispatch(changeContact(changeData));
    props.close();
  };
  return (
    <>
      <div className={styles.form}>
        <h2 className={styles.title}>
          {TEXT.pageTitle} {name}
        </h2>
        <label htmlFor='name'>{TEXT.nameLable}</label>
        <input
          id='name'
          required
          type='text'
          placeholder='John Dude'
          value={inputName}
          onChange={(evt) => setInputName(evt.target.value)}
        />

        <label htmlFor='email'>{TEXT.emailLable}</label>
        <input
          id='email'
          required
          type='email'
          placeholder='user@inbox.com'
          value={inputEmail}
          onChange={(evt) => setInputEmail(evt.target.value)}
        />

        <label htmlFor='phone'>{TEXT.phoneLabel}</label>
        <input
          id='phone'
          required
          type='phone'
          placeholder='xxxxxxxxxxx'
          value={inputPhone}
          onChange={(evt) => setInputPhone(evt.target.value)}
        />

        <label htmlFor='address'>{TEXT.addressLabel}</label>
        <input
          id='address'
          required
          type='text'
          value={inputAddress}
          onChange={(evt) => setInputAddress(evt.target.value)}
        />
        <button type='button' className={styles.btnAdd} onClick={change}>
          {TEXT.buttonName}
        </button>
      </div>
    </>
  );
};

import { FC, useContext, useState } from 'react';
import { IUserContact } from '../../types';
import styles from './index.module.css';
import { SearchContext } from '../../context';
import { Contact } from '../UI/Contact';
import { SortArrows } from '../UI/SortArrows';

interface IProps {
  users: IUserContact[];
}

export const ContactsList: FC<IProps> = (props) => {
  const TEXT = {
    twoCol: 'Client ID',
    threeCol: 'Client Name',
    fourCol: 'E-mail',
    fiveCol: 'Phone Number',
    sixCol: 'Client Address',
    sevenCol: 'Action',
  };
  const { users } = props;
  const { searchValue } = useContext(SearchContext);

  const [checkedState, setCheckedState] = useState<Boolean[]>(new Array(users.length).fill(false));
  const handleOnChange = (position: number) => {
    const updateCheckedState = checkedState.map((i, idx) => (idx === position ? !i : i));
    setCheckedState(updateCheckedState);
  };
  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allTrue = checkedState.map((item) => (item = true));
      setCheckedState(allTrue);
    } else {
      const allFalse = checkedState.map((item) => (item = false));
      setCheckedState(allFalse);
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className={styles.firstHead}>
              <div className={styles.content}>
                <input type='checkbox' name='checkbox' id='check' onChange={selectAll} />
                <label htmlFor='check'></label>
              </div>
            </th>
            <th className={styles.secondHead}>
              <div className={styles.content}>
                <span>{TEXT.twoCol}</span>
                <SortArrows prop={'id'} />
              </div>
            </th>
            <th className={styles.thirdHead}>
              <div className={styles.content}>
                <span>{TEXT.threeCol}</span>
                <SortArrows prop={'name'} />
              </div>
            </th>
            <th className={styles.fourthHead}>
              <div className={styles.content}>
                <span>{TEXT.fourCol}</span>
                <SortArrows prop={'email'} />
              </div>
            </th>
            <th className={styles.fifthHead}>
              <div className={styles.content}>
                <span>{TEXT.fiveCol}</span>
              </div>
            </th>
            <th className={styles.sixthHead}>
              <div className={styles.content}>
                <span>{TEXT.sixCol}</span>
                <SortArrows prop={'address'} />
              </div>
            </th>
            <th className={styles.seventhHead}>
              <div className={styles.content}>
                <span>{TEXT.sevenCol}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) =>
              user.name.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : '')
            )
            .map((userData, index) => (
              <Contact
                key={userData.id}
                checkedState={checkedState}
                userData={userData}
                index={index}
                handleOnChange={handleOnChange}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

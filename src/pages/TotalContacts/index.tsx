import { FC, useState } from 'react';
import styles from './index.module.css';
import { SortContext } from '../../context';
import { Modal } from '../../components/UI/Modal';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../../components/UI/Pagination';
import { ContactsList } from '../../components/ContactsList';
import { sortContacts } from '../../utils/sortContacts';
import { IUserContact } from '../../types';

export const TotalContacts: FC = () => {
  const TEXT = {
    pageTitle: 'Total Contacts',
    buttonName: 'Add +',
  };

  const contacts: IUserContact[] = [];

  // открытие модалки
  const [isOpenAdd, setIsOpenAdd] = useState<Boolean>(false);
  const handleOpenModal = () => {
    setIsOpenAdd(true);
  };
  const handleCloseModal = () => {
    setIsOpenAdd(false);
  };

  // Настройки сортировки
  const [direction, setDirection] = useState('increasing');
  const [prop, setProp] = useState('id');

  // Сортировка
  const sortedUsers = sortContacts([...contacts], prop, direction);

  // Пагинация
  const [currentUsers, usersPerPage, paginate, nextPage, prevPage, currentPage] =
    usePagination(sortedUsers);

  return (
    <>
      <SortContext.Provider value={{ direction, setDirection, setProp }}>
        <div className={styles.contentHead}>
          <h3>{TEXT.pageTitle}</h3>
          <button onClick={handleOpenModal}>
            <span>{TEXT.buttonName}</span>
          </button>
          <Modal isOpen={isOpenAdd} onClose={handleCloseModal}>
            {/* добавить AddContact */}
            <div>Добавить контакт</div>
          </Modal>
        </div>
        <div className={styles.contentContainer}>
          <ContactsList users={currentUsers} />
        </div>
        <div className={styles.contentFooter}>
          <div className={styles.pagination}>
            {contacts.length ? (
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={contacts.length}
                paginate={paginate}
                currentPage={currentPage}
                prev={prevPage}
                next={nextPage}
              />
            ) : null}
          </div>
        </div>
      </SortContext.Provider>
    </>
  );
};
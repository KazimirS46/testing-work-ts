import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import logOutIcon from '../../assets/logout.svg';
import { SearchContext } from '../../context';
import { SideMenu } from '../UI/SideMenu';
import { Search } from '../UI/Search';
import { UserProfile } from '../UI/UserProfile';

export const Layout: FC = () => {
  const TEXT = {
    title: 'LOGO',
    logButtonName: 'Log out',
  };

  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBar}>
        <div className={styles.sideBarLogo}>
          <h2 className={styles.mainLogo}>{TEXT.title}</h2>
        </div>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <div className={styles.logOutButton}>
          <button type='button' onClick={() => console.log('Выход')}>
            <img src={logOutIcon} alt='Выйти' />
            <span>{TEXT.logButtonName}</span>
          </button>
        </div>
      </div>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className={styles.header}>
          <div className={styles.head}>
            <Search />
            <UserProfile />
          </div>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

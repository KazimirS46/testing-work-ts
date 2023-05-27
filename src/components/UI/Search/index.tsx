import { FC, useContext } from 'react';
import styles from './index.module.css';
import { SearchContext } from '../../../context';
import searchIcon from './assets/searchIcon.svg';
import clearIcon from './assets/clearIcon.svg';

export const Search: FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue?.(event.target.value);

  const clear = () => {
    setSearchValue?.('');
  };
  return (
    <div className={styles.searchField}>
      <input
        type='text'
        placeholder='Search by Name...'
        value={searchValue}
        onChange={onChangeInput}
      />
      <img src={searchIcon} alt='' className={styles.icon} />
      <img src={clearIcon} className={styles.clear} alt='Очистить поле ввода' onClick={clear} />
    </div>
  );
};

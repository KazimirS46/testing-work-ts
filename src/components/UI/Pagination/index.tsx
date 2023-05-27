import { FC } from 'react';
import styles from './index.module.css';

interface IProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  prev: () => void;
  next: () => void;
}

export const Pagination: FC<IProps> = (props) => {
  const { usersPerPage, totalUsers, paginate, currentPage, prev, next } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={styles.pagination}>
        <li>
          <button
            onClick={prev}
            className={styles.btnPrev}
            disabled={currentPage === pageNumbers[0]}>
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li className={styles.pageItem} key={number}>
            <button
              className={currentPage === number ? styles.pageLink : undefined}
              onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={next}
            className={styles.btnNext}
            disabled={currentPage === pageNumbers.length}>
            Prev
          </button>
        </li>
      </ul>
    </div>
  );
};

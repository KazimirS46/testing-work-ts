import { FC, useContext, useState } from 'react';
import styles from './index.module.css';
import { SortContext } from '../../../context';

interface IProps {
  prop: string;
}
export const SortArrows: FC<IProps> = (props) => {
  const { prop } = props;
  const { setDirection, setProp } = useContext(SortContext);
  const [state, setState] = useState<string>('decreasing');

  const toggleSort = () => {
    setState((prev) => (prev === 'decreasing' ? (prev = 'increasing') : (prev = 'decreasing')));
    setProp && setProp(prop);
    setDirection && setDirection(state);
  };
  return (
    <button type='button' className={styles.arrows} onClick={toggleSort}>
      <svg
        className={state ? styles.active : undefined}
        width='10.8'
        height='6'
        viewBox='0 0 10.8 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M5.25 6.67572e-06L10.5 5.22501L0 5.22501L5.25 6.67572e-06Z' />
      </svg>
      <svg
        className={!state ? styles.active : undefined}
        width='10.8'
        height='6'
        viewBox='0 0 10.8 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M5.25 6.67572e-06L10.5 5.22501L0 5.22501L5.25 6.67572e-06Z' />
      </svg>
    </button>
  );
};

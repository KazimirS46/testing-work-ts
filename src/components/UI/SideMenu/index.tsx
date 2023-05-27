import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';
import contactsIcon from './assets/contactsIcon.svg';
import calendarIcon from './assets/calendarIcon.svg';
import reportIcon from './assets/reportIcon.svg';

const points = [
  { id: '0', title: 'TotalContacts', image: contactsIcon, url: '/' },
  { id: '1', title: 'Calendar', image: calendarIcon, url: '/calendar' },
  { id: '2', title: 'Project Report', image: reportIcon, url: '/report' },
];

const setActive = ({ isActive }: any) => (isActive ? styles.active : undefined);

export const SideMenu: FC = () => {
  return (
    <ul className={styles.menu}>
      {points.map((point) => (
        <li key={point.id}>
          <NavLink to={point.url} className={setActive}>
            <img src={point.image} alt='' />
            <span>{point.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

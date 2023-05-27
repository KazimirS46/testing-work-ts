import { useState } from 'react';
import { IUserContact } from '../types';

type Void = () => void;
type PN = (pageNumber: number) => void;
type UsePagination = (
  users: IUserContact[]
) => [
  currentUsers: IUserContact[],
  usersPerPage: number,
  paginate: PN,
  nextPage: Void,
  prevPage: Void,
  currentPage: number
];
export const usePagination: UsePagination = (users) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return [currentUsers, usersPerPage, paginate, nextPage, prevPage, currentPage];
};

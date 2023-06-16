import { Pagination } from '@mui/material';
import React from 'react';

interface IProps {
  length: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

export const CustomPagination: React.FC<IProps> = ({
  length,
  perPage,
  currentPage,
  setCurrentPage
}) => {
  const pagesCount = Math.ceil(length / perPage);

  const onChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Pagination count={pagesCount} page={currentPage} onChange={onChange} />
  );
};

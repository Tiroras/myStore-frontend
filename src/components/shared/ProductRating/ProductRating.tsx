import styles from './ProductRating.module.scss';
import { IReview } from '@/types';
import { Rating } from '@mui/material';
import React, { useState } from 'react';

interface IProps {
  reviews: IReview[];
}

export const ProductRating: React.FC<IProps> = ({ reviews }) => {
  const [rating, setRating] = useState(
    Math.round(
      reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length
    )
  );

  return (
    <div className={styles.productRating}>
      <div className={styles.ratingWrapper}>
        <Rating value={rating || 0} readOnly precision={0.1} />
        <span className={styles.rating}>{rating}</span>
      </div>
      <span>({reviews.length} reviews) </span>
    </div>
  );
};

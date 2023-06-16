import styles from './ProductItem.module.scss';
import { AddToCart } from '@/components/shared/AddToCart';
import { FavoriteButton } from '@/components/shared/FavoriteButton';
import { ProductRating } from '@/components/shared/ProductRating';
import { IProduct } from '@/types/products.types';
import { convertPrice } from '@/utils/convertPrice';
import { Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  product: IProduct;
}

export const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.imageWrapper}>
        <Link href={`product/${product.slug}`}>
          <Image
            width={250}
            height={250}
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
        <FavoriteButton productId={product.id} />
      </div>
      <div className={styles.info}>
        <Tooltip title={product.name}>
          <Link href={`product/${product.slug}`}>
            <h3 className={styles.name}>{product.name}</h3>
          </Link>
        </Tooltip>
        <Link href={`category/${product.category.slug}`}>
          <div className={styles.category}>{product.category.name}</div>
        </Link>
        <ProductRating reviews={product.reviews || []} />
        <div className={styles.bottomBlock}>
          <div className={styles.price}>{convertPrice(product.price)}</div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

import styles from './Catalog.module.scss';
import { ProductItem } from './ProductItem';
import { IProduct } from '@/types/products.types';
import cn from 'classnames';
import React from 'react';

interface IProps {
  products: IProduct[];
  title?: string;
  className?: string;
}

export const Catalog: React.FC<IProps> = ({ products, title, className }) => {
  return (
    <section className={cn(styles.catalog, className)}>
      <div className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
      </div>
      <div className={styles.list}>
        {products?.length ? (
          products.map(prod => <ProductItem key={prod.id} product={prod} />)
        ) : (
          <div>There are no products</div>
        )}
      </div>
    </section>
  );
};

import { Catalog } from '../Catalog';
import { Layout } from '../shared/Layout';
import { Meta } from '../shared/Meta';
import styles from './Favorites.module.scss';
import { IProductList } from '@/types/products.types';
import React from 'react';

interface IProps {
  data: IProductList;
}

export const Favorites: React.FC<IProps> = ({ data }) => {
  return (
    <Meta title='Favorites'>
      <Layout>
        <div className={styles.home}>
          <Catalog title='Favorites' products={data.products} />
        </div>
      </Layout>
    </Meta>
  );
};

import { CatalogPagination } from '../Catalog';
import { Layout } from '../shared/Layout';
import { Meta } from '../shared/Meta';
import styles from './Home.module.scss';
import productsService from '@/services/products.service';
import { EnumProductSort, IProductList } from '@/types/products.types';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

interface IProps {
  data: IProductList;
}

export const Home: React.FC<IProps> = ({ data }) => {
  const [sortType, setSortType] = useState<EnumProductSort>(
    EnumProductSort.NEWEST
  );
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const { data: response, isLoading } = useQuery(
    ['products', sortType, perPage, page],
    () =>
      productsService.getAll({
        sort: sortType,
        page,
        perPage
      }),
    {
      initialData: data,
      keepPreviousData: true
    }
  );

  const changeSortType = (sortType: EnumProductSort) => setSortType(sortType);

  return (
    <Meta title='Home'>
      <Layout>
        <div className={styles.home}>
          <CatalogPagination
            title='Freshed products'
            data={response}
            isLoading={isLoading}
            sortType={sortType}
            currentPage={page}
            perPage={perPage}
            setPage={setPage}
            changeSortType={changeSortType}
          />
        </div>
      </Layout>
    </Meta>
  );
};

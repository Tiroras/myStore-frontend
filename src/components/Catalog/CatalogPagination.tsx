import { CustomPagination } from '../shared/CustomPagination';
import styles from './Catalog.module.scss';
import { ProductItem } from './ProductItem';
import { SortDropdown } from './SortDropdown';
import { EnumProductSort, IProductList } from '@/types/products.types';
import cn from 'classnames';
import React from 'react';

interface IProps {
  data: IProductList;
  title?: string;
  className?: string;
  isLoading: boolean;
  sortType: EnumProductSort;
  currentPage: number;
  perPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  changeSortType: (sortType: EnumProductSort) => void;
}

export const CatalogPagination: React.FC<IProps> = ({
  data,
  title,
  className,
  isLoading,
  sortType,
  currentPage,
  perPage,
  setPage,
  changeSortType
}) => {
  // const [sortType, setSortType] = useState<EnumProductSort>(
  //   EnumProductSort.NEWEST
  // );
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(8);

  // const { data: response, isLoading } = useQuery(
  //   ['products', sortType, perPage, page],
  //   () =>
  //     productsService.getAll({
  //       sort: sortType,
  //       page,
  //       perPage
  //     }),
  //   {
  //     initialData: data,
  //     keepPreviousData: true
  //   }
  // );

  // const changeSortType = (sortType: EnumProductSort) => setSortType(sortType);

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <section className={cn(styles.catalog, className)}>
      <div className={styles.header}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <SortDropdown sortType={sortType} changeSortType={changeSortType} />
      </div>
      <div className={styles.list}>
        {data.products.length ? (
          data.products.map(prod => (
            <ProductItem key={prod.id} product={prod} />
          ))
        ) : (
          <div>There are no products</div>
        )}
      </div>
      {data?.products && (
        <div className={styles.loadMore}>
          <CustomPagination
            length={data.length}
            perPage={perPage}
            currentPage={currentPage}
            setCurrentPage={setPage}
          />
        </div>
      )}
    </section>
  );
};

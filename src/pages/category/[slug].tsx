import { CatalogPagination } from '@/components/Catalog';
import { Layout } from '@/components/shared/Layout';
import { Meta } from '@/components/shared/Meta';
import categoriesService from '@/services/categories.service';
import productsService from '@/services/products.service';
import { ICategory } from '@/types/categories.types';
import { EnumProductSort, IProductList } from '@/types/products.types';
import { defaultPaginationData } from '@/utils/defaultPaginationData';
import { useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

interface IProps {
  data: IProductList;
  category: ICategory;
}

const CategoryPage: NextPage<IProps> = ({ category, data }) => {
  const [sortType, setSortType] = useState<EnumProductSort>(
    EnumProductSort.NEWEST
  );
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const { data: response, isLoading } = useQuery(
    ['products', sortType, perPage, page, category.slug],
    () =>
      productsService.getByCategory(category.slug, {
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
    <Meta title={category.name}>
      <Layout>
        <CatalogPagination
          data={response || { products: [], length: 0 }}
          title={category.name}
          isLoading={isLoading}
          sortType={sortType}
          currentPage={page}
          perPage={perPage}
          setPage={setPage}
          changeSortType={changeSortType}
        />
      </Layout>
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await categoriesService.getAll();
  const paths = categories.data.map(cat => ({ params: { slug: cat.slug } }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await productsService.getByCategory(
    params?.slug as string,
    defaultPaginationData
  );
  const { data: category } = await categoriesService.getBySlug(
    params?.slug as string
  );

  return {
    props: {
      data,
      category
    }
  };
};

export default CategoryPage;

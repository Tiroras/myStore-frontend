import { Catalog } from '@/components/Catalog';
import { Layout } from '@/components/shared/Layout';
import { Meta } from '@/components/shared/Meta';
import productsService from '@/services/products.service';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const SearchPage: NextPage = () => {
  const { query } = useRouter();
  const { data } = useQuery(['search products', query.term], () =>
    productsService.getAll({ searchTerm: query.term as string })
  );

  return (
    <Meta title='Search'>
      <Layout>
        <Catalog
          title={`Result on request: ${query.term}`}
          products={data?.products || []}
        />
      </Layout>
    </Meta>
  );
};

export default SearchPage;

// import styles from '@/styles/Home.module.scss';
import { Home } from '@/components/Home';
import productsService from '@/services/products.service';
import { defaultPaginationData } from '@/utils/defaultPaginationData';
import { GetStaticProps, NextPage } from 'next';
import { IProductList } from 'types/products.types';

interface IProps {
  data: IProductList;
}

const HomePage: NextPage<IProps> = ({ data }) => {
  return (
    <>
      <Home data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const data = await productsService.getAll(defaultPaginationData);

  return {
    props: {
      data
    }
  };
};

export default HomePage;

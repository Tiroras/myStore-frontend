import { Orders } from '@/components/Orders';
import { Layout } from '@/components/shared/Layout';
import { Meta } from '@/components/shared/Meta';
import ordersService from '@/services/orders.service';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';

const OrdersPage: NextPage = () => {
  const { data } = useQuery(['orders'], () => ordersService.getAll());
  return (
    <Meta title='Orders'>
      <Layout>
        <Orders orders={data || []} />
      </Layout>
    </Meta>
  );
};

export default OrdersPage;

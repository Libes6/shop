import Layout from '@/components/ui/layout/Layout';
import Meta from '@/components/ui/Meta';
import React, {FC} from 'react';

const PaymentSuccess: FC = () => {
    return (
        <Meta title={'payment'} description={'lk page'}>
            <Layout>
            <div>
                Спасибо за оплату
            </div>
            </Layout>
        </Meta>
    );
};

export default PaymentSuccess;
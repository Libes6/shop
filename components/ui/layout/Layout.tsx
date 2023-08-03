import React, { FC, PropsWithChildren } from 'react';

import Sidebar from '@/components/ui/sidebar/Sidebar';
import Header from "@/components/ui/header/Header";
import Container from "@/components/ui/layout/Container";

const Layout: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <div className="overflow-y-hidden">
        <Header/>
        <div className='grid-layout overflow-y-hidden'>
            <Container>
                <main className='py-0'>{children}</main>
            </Container>

        </div>
    </div>
  );
};

export default Layout;

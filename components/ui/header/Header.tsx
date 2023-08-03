import React, { FC } from 'react';
import Button from '@/components/ui/button/Button';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
import Container from '@/components/ui/layout/Container';
import Image from 'next/image';
import logo from '../../../../public/images/logo.webp';
import { FcLike } from 'react-icons/fc';
import Search from '@/components/ui/catalog/Search';
import { FiUser, FiList, FiPackage } from 'react-icons/fi';
import { useProfile } from '@/hooks/useProfile';
import Link from 'next/link';
import HeaderCart from '@/components/ui/cart/HeaderCart';
import { useCart } from '@/hooks/useCart';
import { AiOutlineShoppingCart } from 'react-icons/Ai';

const Header: FC = () => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const { logout } = useActions();
  const { replace } = useRouter();

  return (
    <>
      <header
        className="bg-white w-full py-3 px-6 grid"
        style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
      >
        <Link href="/" className="flex justify-center">
          <Image
            width={100}
            height={10}
            src="/images/logo.svg"
            alt={'logo-amazon'}
          />
        </Link>
        <div className="flex gap-10 items-center">
          <Link href="/catalog" className="align-middle">
            <Button
              icon={<FiList size={18} color={'white'} />}
              variant={'dark'}
            >
              Каталог
            </Button>
          </Link>
          <div>
            <Search
              setSearch={() => console.log('1')}
              size="lg"
            ></Search>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href={user ? '/lk' : '/auth'}
            className="px-4 py-3"
          >
            <FiUser size={26} color={'black'} />
          </Link>

          <div className="px-4 py-3">
            <HeaderCart>
              <AiOutlineShoppingCart size={26} />
            </HeaderCart>
          </div>
          {user && (
            <>
              <Link
                href={'/favorites'}
                className="px-4 py-3"
              >
                <FcLike size={26} color={'white'} />
              </Link>
              <Link
                href={'/my-orders'}
                className="px-4 py-3"
              >
                <FiPackage size={26} color={'black'} />
              </Link>
            </>
          )}

          {/*<div className='px-4 py-3'>*/}
          {/*    {profile?.email}*/}
          {/*</div>*/}
        </div>
      </header>
    </>
  );
};

export default Header;

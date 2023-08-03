import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/input/Field';
import { validEmail } from '@/components/ui/input/valid';

import {
  IAuthResponse,
  IEmailPassword,
} from '@/store/user/user.interface';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import Loader from "@/components/ui/loader/Loader";
import {PacmanLoader} from "react-spinners";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";

const Auth: FC = () => {
  useAuthRedirect()
  const { isLoading } = useAuth();

  const { login, register } = useActions();

  const [type, setType] = useState<'login' | 'register'>(
    'login',
  );

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (
    data,
  ) => {
    if (type === 'login') {
      login(data);
      console.log(data);
    } else {
      register(data);
    }
    reset();
  };
  return (
    <Meta title={'auth'}>
      <div className='flex h-screen'>

        {isLoading&&   <Loader/>}
        <form
          className="rounded-lg bg-white shadow-md px-12 py-8 m-auto form-w-500 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading className="capitalize text-center mb-3 font-normal">
            {type == 'login' ? 'вход' : 'регистрация'}
          </Heading>
          <Field
            {...formRegister('email', {
              required: 'email is required',
              pattern: {
                value: validEmail,
                message:
                  'Ошибка email',
              },
            })}
            placeholder="Email"
            error={errors.email?.message}
          ></Field>
          <Field
            {...formRegister('password', {
              required: 'password is required',
              minLength: {
                value: 6,
                message:
                  'Пароль меньше 6 символов',
              },
            })}
            type="password"
            placeholder="Password"
            error={errors.password?.message}
          ></Field>
          <div className='w-full '>
            <Button variant={'dark'} className='w-auto inline-block' >
              {type == 'login' ? 'вход' : 'регистрация'}
            </Button>
          </div>

        </form>
      </div>
    </Meta>
  );
};

export default Auth;

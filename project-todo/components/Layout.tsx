import { FC } from 'react';
import Head from 'next/head';
import { BadgeCheckIcon } from '@heroicons/react/solid';

import { Title } from '../types/type';

export const Layout: FC<Title> = ({ children, title = 'Todo app' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-700">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <BadgeCheckIcon className="h-6 w-6 text-blue-500" />
      </footer>
    </div>
  );
};

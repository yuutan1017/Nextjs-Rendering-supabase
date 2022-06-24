import { NextPage } from 'next';
import Link from 'next/link';
import { LogoutIcon } from '@heroicons/react/solid';

import { supabase } from '../utils/supabase';
import { Layout } from '../components/Layout';

const Dashboard: NextPage = () => {
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <Layout title="Dashboard">
      <Link href="/ServerSideRendering">
        <div className="mb-5 cursor-pointer text-3xl text-blue-600">
          Server Side Rendering (SSR)
        </div>
      </Link>
      <Link href="/StaticSiteGenerator">
        <div className="mb-5 cursor-pointer text-3xl text-red-600">
          Static Site Generator (SSG)
        </div>
      </Link>
      <Link href="/ClientSideRendering">
        <div className="mb-5 cursor-pointer text-3xl text-yellow-600">
          Client Side Rendering (SSG + CSF)
        </div>
      </Link>
      <Link href="/IncrementalStaticRegeneration">
        <div className="cursor-pointer text-3xl text-green-600">
          Incremental Static Regeneration (ISR)
        </div>
      </Link>
      <LogoutIcon
        className="corsor-pointer mt-6 h-6 w-6 text-blue-500"
        onClick={signOut}
      />
    </Layout>
  );
};

export default Dashboard;

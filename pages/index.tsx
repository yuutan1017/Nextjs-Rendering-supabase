import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      {' '}
      <Link href="/ServerSideRendering">Link to SSR</Link>
      {'next supabase'}
    </Layout>
  );
};

export default Home;

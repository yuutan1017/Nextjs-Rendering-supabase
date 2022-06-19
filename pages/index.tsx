import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Link href="/ServerSideRendering">
        <div className="text-3xl cursor-pointer mb-5 text-blue-600">Server Side Rendering (SSR)</div>
      </Link>
      <Link href="/StaticSiteGenerator">
        <div className="text-3xl cursor-pointer mb-5 text-red-600">Static Site Generator (SSG)</div>
      </Link>
      <Link href="/ClientSideRendering">
        <div className="text-3xl cursor-pointer mb-5 text-yellow-600">Client Side Rendering (SSG + CSF)</div>
      </Link>
      <Link href="/IncrementalStaticRegeneration">
        <div className="text-3xl cursor-pointer text-green-600">Incremental Static Regeneration (ISR)</div>
      </Link>
    </Layout>
  );
};

export default Home;

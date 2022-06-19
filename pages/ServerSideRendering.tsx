import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';

import { Layout } from '../components/Layout';
import { supabase } from '../utils/supabase';
import { StaticProps } from '../types/type';

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('getServerSideProps/ssr invoked');
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true });
  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true });
  return { props: { tasks, notices } };
};

const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter();
  return (
    <Layout title="SSR">
      <h1 className="mb-3 text-2xl text-blue-500">
        Server Side Rendering (SSR)
      </h1>
      <ul className="mb-3">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extrabold">・{task.title}</p>
            </li>
          );
        })}
      </ul>
      <ul className="mb-3">
        {notices.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extrabold">・{notice.content}</p>
            </li>
          );
        })}
      </ul>
      {/* <div className="flex flex-row">
        <Link href="/StaticSiteGenerator" prefetch={false}>
          <a className="my-3 mx-5 text-xl">Link to SSG</a>
        </Link>
        <Link href="/IncrementalStaticRegeneration" prefetch={false}>
          <a className="my-3 mx-4 text-xl">Link to ISR</a>
        </Link>
      </div>
      <div className="flex flex-row">
        <button
          className="mx-5 mb-3 text-xl"
          onClick={() => router.push('/StaticSiteGenerator')}
        >
          Route to SSG
        </button>
        <button
          className="mx-5 mb-3 text-xl"
          onClick={() => router.push('/IncrementalStaticRegeneration')}
        >
          Route to ISR
        </button>
      </div> */}
    </Layout>
  );
};

export default Ssr;

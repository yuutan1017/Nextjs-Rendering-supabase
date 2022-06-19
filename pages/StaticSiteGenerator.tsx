import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';

import { Layout } from '../components/Layout';
import { supabase } from '../utils/supabase';
import { Task, Notice, StaticProps } from '../types/type';

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps/ssg invoked');
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

const Ssg: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter();
  return (
    <Layout title="SSG-Page">
      <h1 className="mb-3 text-2xl text-red-500">Static Site Generator (SSG)</h1>
      <ul className="mb-3">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extrabold">{task.title}</p>
            </li>
          );
        })}
      </ul>
      <ul className="mb-3">
        {notices.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extrabold">{notice.content}</p>
            </li>
          );
        })}
      </ul>
      {/* <div className="flex flex-row">
        <Link href="/ServerSideRendering" prefetch={false}>
          <a className="my-3 text-xl mx-5">Link to SSR</a>
        </Link>
        <Link href="/IncrementalStaticRegeneration" prefetch={false}>
          <a className="my-3 text-xl mx-4">Link to ISR</a>
        </Link>
      </div>
      <div className="flex flex-row">
        <button
          className="mx-5 mb-3 text-xl"
          onClick={() => router.push('/ServerSideRendering')}
        >
          Route to SSR
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

export default Ssg;

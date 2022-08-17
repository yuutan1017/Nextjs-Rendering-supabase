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
    </Layout>
  );
};

export default Ssr;

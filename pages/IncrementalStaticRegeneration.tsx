import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';

import { Layout } from '../components/Layout';
import { supabase } from '../utils/supabase';
import { StaticProps } from '../types/type';

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps/isr invoked');
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true });
  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true });
  return { props: { tasks, notices }, revalidate: 5 };
};

const Isr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter();
  return (
    <Layout title="ISR">
      <h1 className="mb-3 text-2xl text-green-600">
        Incremental Static Regeneration (ISR)
      </h1>
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
    </Layout>
  );
};

export default Isr;

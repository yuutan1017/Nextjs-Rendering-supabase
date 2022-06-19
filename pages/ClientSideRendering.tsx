import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Notice, Task } from '../types/type';
import { supabase } from '../utils/supabase';
import { Layout } from '../components/Layout';

const Csr: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const { data: tasks } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true });
      setTasks(tasks as Task[]);
    };
    const getNotices = async () => {
      const { data: notices } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: true });
      setNotices(notices as Notice[]);
    };
    getTasks();
    getNotices();
  }, []);

  return (
    <Layout title="CSR">
      <h1 className="mb-4 text-2xl text-yellow-600">SSG + CSF</h1>
      <ul className="mb-3">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extralight">{task.title}</p>
            </li>
          );
        })}
      </ul>
      <ul className="mb-3">
        {notices.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extralight">{notice.content}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Csr;

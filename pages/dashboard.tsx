import { NextPage } from 'next';
import {
  LogoutIcon,
  DocumentTextIcon,
  StatusOnlineIcon,
} from '@heroicons/react/solid';

import { supabase } from '../utils/supabase';
import { Layout } from '../components/Layout';
import { TaskList } from '../components/TaskList';
import { TaskForm } from '../components/TaskForm';
import { NoticeForm } from '../components/NoticeForm';
import { NoticeList } from '../components/NoticeList';
import { Links } from '../components/Links';

const Dashboard: NextPage = () => {
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <Layout title="Dashboard">
      <LogoutIcon
        className="corsor-pointer m-3 mt-6 h-6 w-6 text-blue-500"
        onClick={signOut}
      />
      <div className="grid grid-cols-2 gap-40">
        <div className="m-3">
          <div className="my-3 flex justify-center">
            <DocumentTextIcon className="h-8 w-8 text-blue-500" />
          </div>
          <TaskForm />
          <TaskList />
        </div>

        <div>
          <div className="my-3 flex justify-center ">
            <StatusOnlineIcon className=" h-8 w-8 text-blue-500" />
          </div>
          <NoticeForm />
          <NoticeList />
        </div>
      </div>
      <Links />
    </Layout>
  );
};

export default Dashboard;

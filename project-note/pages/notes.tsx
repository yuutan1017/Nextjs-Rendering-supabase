import { NextPage } from 'next';
import { LogoutIcon, DocumentTextIcon } from '@heroicons/react/solid';

import { supabase } from '../utils/supabase';
import { Layout } from '../components/Layout';

const Notes: NextPage = () => {
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <Layout title="Notes">
      <LogoutIcon
        className="corsor-pointer m-3 mt-6 h-6 w-6 text-blue-500"
        onClick={signOut}
      />
    </Layout>
  );
};

export default Notes;

import { FormEvent, FC } from 'react';

import { supabase } from '../utils/supabase';
import useStore from '../store';
import { useMutateNotice } from '../hooks/useMutateNotice';

export const NoticeForm: FC = () => {
  const { EditedNotice } = useStore();
  const update = useStore((state) => state.UpdateEditedNotice);
  const { createNoticeMutation, updateNoticeMutation } = useMutateNotice();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (EditedNotice.id === '') {
      createNoticeMutation.mutate({
        content: EditedNotice.content,
        user_id: supabase.auth.user()?.id,
      });
    } else {
      updateNoticeMutation.mutate({ id: EditedNotice.id, content: EditedNotice.content });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="my-2 rounded border border-gray-300 px-3  py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
        placeholder="New notice ?"
        value={EditedNotice.content}
        onChange={(e) => update({ ...EditedNotice, content: e.target.value })}
      />
      <button
        type="submit"
        className="ml-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium  text-white hover:bg-indigo-700 "
      >
        {EditedNotice.id ? 'Update' : 'Create'}
      </button>
    </form>
  )
};

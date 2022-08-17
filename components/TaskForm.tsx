import { FormEvent, FC } from 'react';

import { supabase } from '../utils/supabase';
import useStore from '../store';
import { useMutateTask } from '../hooks/useMutateTask';

export const TaskForm: FC = () => {
  const { EditedTask } = useStore();
  const { createTaskMutation, updateTaskMutation } = useMutateTask();
  const update = useStore((state) => state.UpdateEditedTask);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (EditedTask.id === '') {
      createTaskMutation.mutate({
        title: EditedTask.title,
        user_id: supabase.auth.user()?.id,
      });
    } else {
      updateTaskMutation.mutate({ id: EditedTask.id, title: EditedTask.title });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
        value={EditedTask.title}
        onChange={(e) => update({ ...EditedTask, title: e.target.value })}
      />
      <button className="ml-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        {EditedTask.id ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

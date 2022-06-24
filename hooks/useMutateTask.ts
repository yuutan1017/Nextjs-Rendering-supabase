import { useQueryClient, useMutation } from 'react-query';

import useStore from '../store';
import { supabase } from '../utils/supabase';
import { Task, editedTask } from '../types/type';

export const useMutateTask = () => {
  const queryClient = useQueryClient();
  const reset = useStore((state) => state.ResetEditedTask);

  const createTaskMutation = useMutation(
    async (task: Omit<Task, 'id' | 'created_at'>) => {
      const { data, error } = await supabase.from('todos').insert(task);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        const previousTodos = queryClient.getQueryData<Task[]>('todos');
        if (previousTodos) {
          queryClient.setQueriesData('todos', [...previousTodos, res[0]]);
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const updateTaskMutation = useMutation(
    async (task: editedTask) => {
      const { data, error } = await supabase
        .from('todos')
        .update({ title: task.title })
        .eq('id', task.id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res, variables) => {
        const previousTodos = queryClient.getQueryData<Task[]>('todos');
        if (previousTodos) {
          queryClient.setQueriesData(
            'todos',
            previousTodos.map((task) =>
              task.id === variables.id ? res[0] : task
            )
          );
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const deleteTaskMutataion = useMutation(
    async (id: string) => {
      const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (_, variables) => {
        const previosuTodos = queryClient.getQueryData<Task[]>('todos');
        if (previosuTodos) {
          queryClient.setQueryData(
            'todos',
            previosuTodos.filter((task) => task.id !== variables)
          );
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );
  return { createTaskMutation, updateTaskMutation, deleteTaskMutataion }
};

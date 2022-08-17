import create from 'zustand';
import { State } from './types/type';

const useStore = create<State>((set) => ({
  EditedTask: { id: '', title: '' },
  EditedNotice: { id: '', content: '' },
  UpdateEditedTask: (payload) =>
    set({
      EditedTask: {
        id: payload.id,
        title: payload.title,
      },
    }),
  ResetEditedTask: () => set({ EditedTask: { id: '', title: '' } }),
  UpdateEditedNotice: (payload) =>
    set({
      EditedNotice: {
        id: payload.id,
        content: payload.content,
      },
    }),
  ResetEditedNotice: () => set({ EditedNotice: { id: '', content: '' } }),
}));

export default useStore;

import { create } from "zustand";

interface BearState {
  counter: number;
  bears: number;
  sidebarStatus: boolean | number;
  increase: (by: number) => void;
  setCounter: (val: number) => void;
  setSidebarStatus: (val: boolean | number) => void;
}

const useStore = create<BearState>()(set => ({
  bears: 0,
  increase: by => set(state => ({ bears: state.bears + by })),
  counter: 0,
  setCounter: (val: number) => set(({ counter }: { counter: number }) => ({ counter: counter + (val || 1) })),
  sidebarStatus: true,
  setSidebarStatus: (val: boolean | number) =>
    set(({ sidebarStatus }: { sidebarStatus: boolean | number }) => ({
      sidebarStatus: val !== undefined ? val : !sidebarStatus
    }))
}));

export default useStore;

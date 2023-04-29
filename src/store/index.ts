import create from "zustand";

const useStore = create(set => ({
  counter: 0,
  setCounter: (val: number) => set(({ counter }: { counter: number }) => ({ counter: counter + (val || 1) })),
}));

export default useStore;

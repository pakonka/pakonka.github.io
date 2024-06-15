import { create } from "zustand";

interface Count {
  count: number;
  setCount: () => void;
}
export const useCount = create<Count>((set) => ({
  count: 0,
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));

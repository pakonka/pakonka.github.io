import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface TUser {
  id: number;
  name: string;
}
interface Auth {
  user: null | TUser;
  setUser: (v: TUser) => void;
}
export const useAuth = create<Auth>()(
  devtools((set) => ({
    user: null,
    setUser: (user: TUser) => set({ user }),
  }))
);

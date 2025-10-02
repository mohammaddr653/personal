import { create } from "zustand";

const useUserStore = create<any>((set) => ({
  user: null,
  userLoading: true,
  setUserLoading: (value: any) => set({ userLoading: value }),
  setUser: (newUser: any) => set({ user: newUser }),
}));
export default useUserStore;

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreData {
  token: string;
  setToken: (data: string) => void;
}

const useTokenStore = create<StoreData>()(
  devtools(
    persist(
      (set) => ({
        token: "",
        setToken: (data) => set({ token: data }),
      }),
      {
        name: "token-storage",
      }
    )
  )
);

export default useTokenStore;

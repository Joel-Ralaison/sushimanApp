import { create } from "zustand";

export const useMenuState = create<{
  menuOpen: boolean;
  menuToggle: () => void;
  menuShow: () => void;
  menuHide: () => void;
}>((set) => ({
  menuOpen: false,
  menuToggle: () => set((state) => ({ menuOpen: !state.menuOpen })),
  menuShow: () => set(() => ({ menuOpen: true })),
  menuHide: () => set(() => ({ menuOpen: false })),
}));

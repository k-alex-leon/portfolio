import { create } from "zustand";

export const useStore = create((set, get) => ({
  isPhoneHover: false,
  setPhoneHover: (isHover) => set({ isPhoneHover: isHover }),
  isPhoneLocked: true,
  setPhoneLock : (isLock) => set({isPhoneLocked : isLock})
}));

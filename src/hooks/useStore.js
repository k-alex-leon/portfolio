import { create } from "zustand";

export const useStore = create((set, get) => ({
  // is the phone hover? we control some camera movements with this
  isPhoneHover: false,
  setPhoneHover: (isHover) => set({ isPhoneHover: isHover }),
  // here we know if the phone is lock
  isPhoneLocked: true,
  setPhoneLock: (isLock) => set({ isPhoneLocked: isLock }),
  // ge keep the active section (tools, work, info...)
  status: "",
  setPageStatus: (st) => set({ status: st }),
  // this keeps the description of some mesh hover
  description: "",
  setDescription: (data) => set({ description: data }),
}));

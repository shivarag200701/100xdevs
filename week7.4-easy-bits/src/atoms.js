import { atom } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 110,
});
export const networkAtom = atom({
  key: "networkAtom",
  default: 10,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 5,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

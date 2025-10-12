import { atom, selector } from "recoil";

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

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const notifications = get(notificationAtom);
    const network = get(networkAtom);
    const messages = get(messagingAtom);
    const jobs = get(jobsAtom);
    return notifications + network + messages + jobs;
  },
});

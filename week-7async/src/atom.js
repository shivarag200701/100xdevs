import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: {
    network: 10,
    jobs: 5,
    notifcations: 20,
    posts: 10,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notifications = get(notificationAtom);
    return (
      notifications.network +
      notifications.jobs +
      notifications.notifcations +
      notifications.posts
    );
  },
});

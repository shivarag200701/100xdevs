import { atom, selector } from "recoil";
import axios from "axios";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "notficationSelector",
    get: async () => {
      await new Promise((r) => setTimeout(r, 5000));
      await setTimeout(() => {
        console.log(1000);
      }, 5000);
      const res = await axios.get("http://localhost:3000/linkedin_server");
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notifications = get(notificationAtom);
    return (
      notifications.network +
      notifications.jobs +
      notifications.notifications +
      notifications.posts
    );
  },
});

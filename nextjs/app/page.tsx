import Image from "next/image";
import axios from "axios";
import { User } from "./actions/user";

async function fetchData() {
  await new Promise((r) => setTimeout(r, 5000));
  const res = await axios.get("http://localhost:3001/api/user");
  return res.data;
}

export default async function Home() {
  const user = await User();
  console.log(user);

  return <div>{user.email}</div>;
}

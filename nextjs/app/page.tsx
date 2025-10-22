import Image from "next/image";
import axios from "axios";

async function fetchData() {
  await new Promise((r) => setTimeout(r, 5000));
  const res = await axios.get(
    "https://blogging_website.shivaraghav200701.workers.dev/api/v1/blog/bulk",
    {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjZjg0ZGIwLWFmMTktNDcxMC04M2FiLTc1OTkyNDU1MTVhMyJ9.CMqn9FheUOCD31FTa7gqQMH3_HVUmjv9Q_TLcJV6HUc",
      },
    }
  );
  return res.data;
}

export default async function Home() {
  const blogs = await fetchData();
  return (
    <div>
      {blogs.map((blog) => (
        <h1 key={blog.id}>{blog.content}</h1>
      ))}
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "description for 1",
    },
    {
      id: 2,
      title: "BLog 2",
      description: "description for 2",
    },
    {
      id: 3,
      title: "BLog 3",
      description: "description for 3",
    },
  ];
  return (
    <div>
      <h1>this is blog page</h1>
      <ul className="mt-10 space-y-3">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;

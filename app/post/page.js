import getAllPost from "@/lib/getAllPost";
import React from "react";

export default function page() {
  const post = getAllPost();
  console.log(post);
  return (
    <div>
      <h1 className="mt-10">All Posts</h1>
    </div>
  );
}

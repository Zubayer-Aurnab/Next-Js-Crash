import React from "react";

const BlogPage = ({ params }) => {
  console.log(params);
  return <div>
    <h1 className="mt-10">the Blog id is : {params.id}</h1>
  </div>;
};

export default BlogPage;

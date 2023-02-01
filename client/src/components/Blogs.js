import React from 'react';
import { sampleBlog } from '../sampleData/sampleBlog';
import BlogCard from './BlogCard';

function Blogs() {
  // console.log(sampleBlog);
  // const blogList = sampleBlog;
  // console.log('blog', blogList);
  return (
    <div>
      <div className="border mx-auto w-[1050px] ">
        <h2 className="text-2xl text-center py-4">blogs</h2>

        <div className="flex flex-row justify-between flex-wrap">
          {sampleBlog.map((blog) => {
            return <BlogCard key={blog.id} {...blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

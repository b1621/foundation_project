import React from 'react';
import { sampleBlog } from '../sampleData/sampleBlog';
import BlogCard from './BlogCard';
import Footer from './Footer';

function Blogs() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="border mx-auto w-[1050px]">
          <h2 className="text-2xl text-center py-4">blogs</h2>

          <div className="flex flex-row justify-between flex-wrap">
            {sampleBlog.map((blog) => {
              return <BlogCard key={blog.id} {...blog} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;

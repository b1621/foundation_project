import React from 'react';
import { sampleBlog } from '../sampleData/sampleBlog';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

function Blogs() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="border mx-auto w-[1050px]">
          <div className=" p-24 text-center text-7xl font-bold leading-4">
            <h2>Blogs</h2>
          </div>

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

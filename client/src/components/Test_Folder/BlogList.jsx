import React from 'react';
import BlogCardTest from './BlogCardTest';

const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <BlogCardTest key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;

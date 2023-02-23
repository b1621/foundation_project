import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={post.imageUrl} alt={post.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">{post.excerpt}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {post.author}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {post.date}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

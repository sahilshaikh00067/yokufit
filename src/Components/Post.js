import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://yokufit.onrender.com/api/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Yoga Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="p-3 bg-gray-200 rounded mb-2">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.paragraph}</p>
          {post.image && (
            <img
              src={`https://yokufit.onrender.com${post.image}`}
              alt={post.title}
              className="w-48 mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Posts;

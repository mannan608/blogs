import React from "react";
import Tags from "../blogs/Tags";

const RelatedBlog = ({ relblog }) => {
  const { image, title, tags, createdAt } = relblog || {};
  return (
    <div class="card">
      <a href="post.html">
        <img src={image} class="card-image" alt={title} />
      </a>
      <div class="p-4">
        <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
          The future of Artificial Inteligence
        </a>
        <Tags tags={tags} />
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlog;

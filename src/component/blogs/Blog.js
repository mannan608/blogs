import React from "react";

const Blog = ({ blog }) => {
  const { image, title, tags, createdAt } = blog || {};
  return (
    <div className="col-lg-3">
      <div class="card">
        <img src={image} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{tags}</p>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

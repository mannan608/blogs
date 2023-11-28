import React from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, image, title, tags, createdAt, isSaved } = blog || {};
  return (
    <div className="col-lg-3">
      <Link to={`blogs/${id}`}>
        <div class="card">
          <img src={image} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <Tags tags={tags} />
            <p>{createdAt}</p>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> {isSaved ? "Saved" : "unsaved"} </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

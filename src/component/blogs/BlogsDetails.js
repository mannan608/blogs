import React from "react";
import Tags from "./Tags";

const BlogsDetails = ({ blog }) => {
  const { image, title, description, tags, likes } = blog || {};
  return (
    <main className="post">
      <img src={image} alt={title} />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <Tags tags={tags} />

        <div className="d-flex gap-4">
          <button className="btn " id="lws-singleLinks">
            <i class="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          <button className="btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogsDetails;

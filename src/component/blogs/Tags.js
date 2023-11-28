import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="d-flex gap-3">
      {tags.map((tag) => (
        <span key={tag.id}># {tag}</span>
      ))}
    </div>
  );
};

export default Tags;

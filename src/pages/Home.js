import React from "react";
import Blogss from "../component/blogs/Blogss";
import FilterShort from "../component/blogs/FilterShort";

const Home = () => {
  return (
    <div className="d-flex gap-5 w-100">
      <FilterShort />
      <Blogss />
    </div>
  );
};

export default Home;

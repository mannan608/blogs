import Blog from "./Blog";
import { fetchBlogs } from "../../features/blogs/BlogsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Blogss = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  });
  // decide what to render
  let content;

  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && blogs?.length === 0) {
    content = <div>No videos found!</div>;
  }

  if (!isError && !isLoading && blogs?.length > 0) {
    content = blogs.map((blog) => <Blog key={blog.id} blog={blog} />);
  }

  return (
    <div className="blogs-wrapper">
      <div className="row">{content}</div>
    </div>
  );
};

export default Blogss;

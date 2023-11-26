import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../features/blog/BlogSlice";
import { useParams } from "react-router-dom";
import BlogsDetails from "../component/blogs/BlogsDetails";
import RelatedBlogs from "../component/relatedblogs/RelatedBlogs";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();

  console.log(blogId);
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);
  const { id, tags } = blog || {};

  let content;
  if (isLoading) {
    content = <p>Loding</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No video found!</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = <BlogsDetails blog={blog} />;
  }

  return (
    <div className="blog-wrapper">
      <div className="row">
        <div className="col-lg-8">{content}</div>
        <div className="col-lg-4">
          <RelatedBlogs currentblogid={id} tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default Blog;

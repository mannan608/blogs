import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedblogs/RelatedBlogsSlice";
import RelatedBlog from "./RelatedBlog";

const RelatedBlogs = ({ currentblogid, tags }) => {
  const dispatch = useDispatch();
  const { relatedblogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedblogs
  );
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentblogid }));
  }, [dispatch, tags, currentblogid]);

  // decide what to render
  let content = null;

  if (isLoading) content = <p>Loading</p>;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedblogs?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && relatedblogs?.length > 0) {
    content = relatedblogs.map((relblog) => (
      <RelatedBlog key={relblog.id} relblog={relblog} />
    ));
  }

  return <div>{content}</div>;
};

export default RelatedBlogs;

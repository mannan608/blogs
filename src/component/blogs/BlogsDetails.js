import { useDispatch } from "react-redux";
import { useState } from "react";
import Tags from "./Tags";
import { updatelike } from "../../features/updatelike/UpdateLikeSlice";

const BlogsDetails = ({ blog }) => {
  const { image, title, description, tags, likes, isSaved } = blog || {};
  const dispatch = useDispatch();

  const [postLikes, setPostLikes] = useState(likes);
  const [saved, setSaved] = useState(isSaved);

  const handlelike = () => {
    const updatedData = {
      ...blog,
      likes: postLikes + 1,
    };
    setPostLikes(postLikes + 1);
    dispatch(updatelike(updatedData));
  };
  // console.log(setPostLikes);

  const handleSaveButton = () => {
    if (!saved) {
      const updatedData = {
        ...blog,
        isSaved: true,
      };
      setSaved(!saved);
      dispatch(updatelike(updatedData));
    }
  };

  return (
    <main className="post">
      <img src={image} alt={title} />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <Tags tags={tags} />

        <div className="d-flex gap-4">
          <button className="btn " id="lws-singleLinks" onClick={handlelike}>
            <i class="fa-regular fa-thumbs-up"></i> {postLikes}
          </button>
          <button
            className={`${saved ? "active" : ""} btn`}
            id="lws-singleSavedBtn"
            onClick={handleSaveButton}
          >
            <i className="fa-regular fa-bookmark "></i>
            {saved ? "Saved" : "unsaved"}
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

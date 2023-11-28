import { useDispatch } from "react-redux";
import { useState } from "react";
import { sort, filter } from "../../features/blogs/BlogsSlice";
import { fetchBlogs } from "../../features/blogs/BlogsSlice";

const FilterShort = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const handleSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      dispatch(fetchBlogs());
    } else {
      dispatch(sort(e.target.value));
    }
  };

  const handleFilter = (e) => {
    setChecked(!checked);
    if (e.target.value === "saved") {
      dispatch(filter(e.target.value));
    } else {
      dispatch(fetchBlogs());
    }
  };

  return (
    <div className="w-25">
      <div className="sidebar-content">
        <h4>Sort</h4>
        <select
          name="sort"
          id="lws-sort"
          className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          onChange={(e) => handleSort(e)}
        >
          <option value="">Default</option>
          <option value="newest">Newest</option>
          <option value="most_liked">Most Liked</option>
        </select>
      </div>
      <div className="sidebar-content">
        <h4>Filter</h4>
        <div className="radio-group">
          <div>
            <input
              type="radio"
              name="filter"
              id="lws-all"
              checked={checked}
              className="radio"
              onChange={handleFilter}
              value="all"
            />
            <label for="lws-all">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="filter"
              id="lws-saved"
              className="radio"
              checked={!checked}
              onChange={handleFilter}
              value="saved"
            />
            <label for="lws-saved">Saved</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterShort;

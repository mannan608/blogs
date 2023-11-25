import axios from "../../utils/axios";

const getBlogs = async () => {
  const response = await axios.get("/blogsfdsf");
  return response.data;
};

export default getBlogs;

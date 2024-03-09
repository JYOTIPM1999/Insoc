import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios.jsx";

const Posts = ({ userId }) => {
  console.log("userId", userId);

  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      makeRequest.get("/posts?userId=" + userId).then((res) => {
        return res.data;
      }),
    // enabled: !!userId, // Enable the query only when userId is true
  });
  console.log("data", data);

  return (
    <div className="posts">
      {error
        ? "Something went wrong, User not logged in! or unable to access token"
        : isPending
        ? "Loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;

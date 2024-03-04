import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios.jsx";
import moment from "moment";

//Temporary comments

// const comments = [
//   {
//     id: 1,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//     name: "John Doe",
//     userId: 1,
//     profilePicture:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
//     name: "Jane Doe",
//     userId: 2,
//     profilePicture:
//       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
//   },
// ];

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const { isPending, error, data } = useQuery({
    // queryKey: ["comments" + postId],
    queryKey: ["comments"],
    queryFn: () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment) => {
      console.log(newComment);
      return makeRequest.post("/comments", newComment);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  // const mutation = useMutation(
  //   (newComment) => {
  //     return makeRequest.post("/comments", newComment);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["comments"]);
  //     },
  //   }
  // );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a comment..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isPending
        ? "Loading..."
        : data.map((comment) => (
            <div className="comment" key={comment.id}>
              <img src={comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;

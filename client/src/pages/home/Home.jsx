import "./home.scss";
import Stories from "../../components/stories/Stories.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Share from "../../components/share/Share.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";

const Home = (req, res) => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;

  return (
    <div className="home">
      <Stories />
      <Share />
      {/* <Posts userId={userId} /> */}
      <Posts />
    </div>
  );
};

export default Home;

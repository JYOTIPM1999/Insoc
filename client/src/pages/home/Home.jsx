import "./home.scss";
import Stories from "../../components/stories/Stories.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Share from "../../components/share/Share.jsx";
import { useNavigate } from "react-router-dom";

const Home = (req, res) => {
  // const navigate = useNavigate();
  // const accessToken = document.cookie.split("; ");
  // .find((row) => row.startsWith("accessToken="));

  // console.log(accessToken);

  // if (!accessToken) {
  //   navigate("/login"); // Assuming "/login" is the route for the login page
  //   return null; // Stop rendering the current component
  // }
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
};

export default Home;

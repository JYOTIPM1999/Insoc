import { useContext } from "react";
import "./rightBar.scss";
import { AuthContext } from "../../context/authContext";

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div> */}
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe</span> Changed their Cover Picture.
              </p>
            </div>
            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe</span> Changed their Cover Picture.
              </p>
            </div>
            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe</span> Changed their Cover Picture.
              </p>
            </div>
            <span>1 min ago.</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe</span> Changed their Cover Picture.
              </p>
            </div>
            <span>1 min ago.</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

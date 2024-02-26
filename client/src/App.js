import Navbar from "./components/navbar/Navbar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
// import Layout from "./components/layout/Layout";

import {createBrowserRouter,RouterProvider,Route, Outlet, Navigate} from "react-router-dom"


function App() {

  //make it false
  const currentUser=true;
  
  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser) {
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:

      //check if the user is logged in or not and it takes in counth everything which are under Layout function.
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
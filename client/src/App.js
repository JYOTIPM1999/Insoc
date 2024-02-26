import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {createBrowserRouter,RouterProvider,Route, Outlet} from "react-router-dom"


function App() {
  
  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
      </div>
    )
  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
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


// import Navbar from "./components/navbar/Navbar";
// import LeftBar from "./components/leftBar/LeftBar";
// import RightBar from "./components/rightBar/RightBar";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Define Layout as a React component
// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: "flex" }}>
//         <LeftBar />
//         {children}
//         <RightBar />
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Route index element={<Home />} />
//               <Route path="profile/:id" element={<Profile />} />
//             </Layout>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

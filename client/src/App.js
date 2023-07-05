import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import LeftBar from "./components/Home/LeftBar";
import RightBar from "./components/Home/RightBar";
import Main from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import ToDo from "./components/Home/Todo/ToDo";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Chat from "./components/Home/Chats/Chat";
import Profile from "./components/Home/Profile/Profile";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  const Layout = () => {
    return (
      <div className='h-screen w-screen'>
        <Navbar />
        <div className="flex" style={{ height: "90%" }}>
          <Outlet />
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth>
        <Layout />
      </RequireAuth>,
      children: [
        {
          path: "/",
          element: <RequireAuth>
            <Main />
          </RequireAuth>,
        },
        {
          path: "/todo",
          element: <RequireAuth>
            <ToDo />
          </RequireAuth>,
        },
        {
          path: "/chats",
          element: <RequireAuth>
            <Chat />
          </RequireAuth>,
        },
        {
          path: "/profile",
          element: <RequireAuth>
            <Profile />
          </RequireAuth>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div className="h-[100%] w-[100%]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

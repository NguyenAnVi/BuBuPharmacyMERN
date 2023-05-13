import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFoundPage from './error/NotFoundPage';

export const routes = [
  {
    element: <Home/>,
    path: "/",
    label: "Home",
    exact: true,
  },
  {
    element: <Login/>,
    path: "/login",
    label: "Signin",
    exact: false,
  },
  {
    element: <Register/>,
    path: "/register",
    label: "Signup",
    exact: false,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
    exact: false,
  },
];

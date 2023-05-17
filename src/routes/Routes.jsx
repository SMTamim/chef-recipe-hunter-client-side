import { createBrowserRouter, useParams } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import ChefDetails from "../views/ChefDetails/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import Error404 from "../views/Error404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'chef/:id',
        element: <PrivateRoutes><ChefDetails/></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-smtamim.vercel.app/recipes/${params.id}`)
      },
    ]
  },
]);

export default router;
import { createBrowserRouter, useParams } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import ChefDetails from "../views/ChefDetails/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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
        element: <ChefDetails/>,
        loader: ({ params }) => fetch(`http://localhost:3000/recipes/${params.id}`)
      }
    ]
  },
]);

export default router;
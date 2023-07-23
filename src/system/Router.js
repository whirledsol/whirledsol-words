import * as React from "react";
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Post from '../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/post/:id",
    element: <Post/>,
  },
  {
    path: "about",
    element: <About/>,
  },
]);


export default function Router(){
	return (
		<RouterProvider router={router} />
	)
}
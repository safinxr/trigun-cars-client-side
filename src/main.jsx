import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import AddProduct from './Pages/AddProduct/AddProduct.jsx';
import MyCart from './Pages/MyCart/MyCart.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import Context from './Context/Context.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)

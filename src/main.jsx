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
import PrivateRoute from './Private/PrivateRoute.jsx';
import CarDisplay from './Pages/CarDisplay/CarDisplay.jsx';
import CarDetails from './Pages/CarDetails/CarDetails.jsx';
import UpdateCar from './Pages/UpdateCar/UpdateCar.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/cardisplay/:brand',
        element: <PrivateRoute><CarDisplay></CarDisplay></PrivateRoute>, 
      },
      {
        path: '/cardetails/:id',
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>, 
      },
      {
        path: '/updatecar/:id',
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>, 
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

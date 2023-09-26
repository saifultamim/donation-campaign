import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Navbar from './components/Home/Navbar.jsx';
import Carddetails from './components/Carddetails/Carddetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
         loader:()=>fetch('Donation.json'),
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
     {
      path:'/navbar',
      element:<Navbar></Navbar>
     },
     {
      path:'/carddetails/:id',
      // loader:({params})=>fetch(`/Donation.json/${params.id}`),
      element:<Carddetails></Carddetails>
     }
    ]
  }
    
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

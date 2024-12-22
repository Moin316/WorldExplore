import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from './pages/Country'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import CountryDetails from './components/Layout/CountryDetails'
import AppLayout from './components/Layout/AppLayout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "countries",
        element: <Country />,
      },
      {
        path: "countries/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;

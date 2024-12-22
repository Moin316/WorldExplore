import React from 'react'
import { NavLink, useRouteError } from 'react-router';

const ErrorPage = () => {
    const errror= useRouteError();
    console.log(errror);
  return (
    <>
    <h1>errror {errror && errror.data}</h1>
    <NavLink to={'/'}>
        <button>Go Home</button>
    </NavLink>
    </>
  )
}

export default ErrorPage

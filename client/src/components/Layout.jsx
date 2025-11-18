import React from "react";
import {Link, Outlet} from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/register">Register</Link> |
      <Link to="/display">Display</Link> |
      <Link to="/update">Update</Link>
      <hr />
      <Outlet />
    </div>
  )
}

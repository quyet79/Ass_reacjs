import React from "react";
import { Redirect, Route } from "react-router";
import { isAuthenticate } from "../auth";

const AdminRoute = ({ children }) => {
  return (
    <Route
      render={() => {
        return isAuthenticate() && isAuthenticate().sub == 1 ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signin" }} />
        );
      }}
    />
  );
};

export default AdminRoute;

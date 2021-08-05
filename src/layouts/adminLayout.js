import React from "react";
import { Route } from "react-router-dom";

import Header from "../components/admin/header";

const AdminLayout = (props) => {
  console.log("props", props);
  return (
    <>
      <div>
        <Header />
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="container-fluid">
          <div className="row">
              <h1>admin</h1>
            <main>{props.children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

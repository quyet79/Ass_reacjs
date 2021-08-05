import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/website/header";
import Footer from "../components/website/footer";
const WebsiteLayout = (props) => {
  return (
    <>
      <Header>Header website</Header>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
          <h1>website</h1>
        <main>{props.children}</main>
      </div>
      <Footer>Footer</Footer>
    </>
  );
};

export default WebsiteLayout;

import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const NewLayOut = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <header>
        <Navbar></Navbar>
      </header>

      <main className="h-[80vh]">{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default NewLayOut;

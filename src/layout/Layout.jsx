import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Layout = ({ children, title }) => {
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

export default Layout;

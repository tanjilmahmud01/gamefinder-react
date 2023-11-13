import React, { useContext } from "react";
import { SanityContext } from "../context/SanityContext";
import { urlFor } from "../lib/sanity";
import Spline from "@splinetool/react-spline";
import Layout from "../layout/layout";

const Home = () => {
  const { games } = useContext(SanityContext);

  return (
    <Layout title="Home">
      <div>
        <h3>home</h3>
      </div>
    </Layout>
  );
};

export default Home;

import React, { useContext } from "react";
import { SanityContext } from "../context/SanityContext";
import { urlFor } from "../lib/sanity";
import Spline from "@splinetool/react-spline";

import NewLayOut from "../layout/NewLayOut.jsx";

const Home = () => {
  const { games } = useContext(SanityContext);

  return (
    <NewLayOut title="Home">
      <div>
        <h3>home</h3>
      </div>
    </NewLayOut>
  );
};

export default Home;

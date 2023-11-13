import React, { useContext } from "react";
import { SanityContext } from "../context/SanityContext";
import { urlFor } from "../lib/sanity";
import GamesCard from "../component/GamesCard";
import Loader from "../component/loader";
import Layout from "../layout/layout";

const AllGames = () => {
  const {
    games,
    loading,
    categories,
    userSearch,
    selectedCategory,
    currentPage,
    goNextPage,
    goPrevPage,
  } = useContext(SanityContext);
  return (
    <Layout title="Store">
      <div>
        <div className="flex md:flex-row flex-col justify-center mt-5 gap-5">
          <input
            onChange={userSearch}
            type="search"
            placeholder="Search Games"
            className="input input-bordered input-info w-full max-w-xs"
          />

          <select
            onChange={selectedCategory}
            className="select select-info w-full max-w-xs"
          >
            {categories.map((category) => (
              <option key={category._id}>{category.categoryName}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center mt-5">
          {loading && <Loader></Loader>}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 container mx-auto">
          {games.slice(0, 6).map((game) => (
            <GamesCard key={game._id} game={game} />
          ))}
        </div>

        <div className="container mx-auto flex justify-between  mt-5 border border-green-400">
          <button
            onClick={goPrevPage}
            className="btn btn-outline btn-primary ms-10"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="btn btn-neutral text-2xl text-blue-700 hover:bg-green-500">
            {currentPage}
          </span>

          <button
            onClick={goNextPage}
            disabled={games.length < 7}
            className="btn btn-outline btn-secondary me-10"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AllGames;

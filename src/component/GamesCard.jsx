import React, { useContext } from "react";
import { urlFor } from "../lib/sanity";
import { SanityContext } from "../context/SanityContext";
import { Link } from "react-router-dom";

const GamesCard = ({ game }) => {
  const { addToCart } = useContext(SanityContext);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={urlFor(game.imageLink)} alt={game.gameName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {game.gameName}
            <div className="badge badge-secondary">
              {game.gameCategory.categoryName}
            </div>
          </h2>

          <div className="card-actions justify-end border border-red-600">
            <span className="text-2xl me-auto text-green-500 font-semibold">
              {game.gamePrice === 0 ? "Free" : "$" + game.gamePrice}
            </span>
            <Link to={`/games/${game._id}`}>
              <button className="btn btn-primary btn-sm">Details</button>
            </Link>
            <button
              onClick={() => addToCart(game)}
              className="btn btn-primary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;

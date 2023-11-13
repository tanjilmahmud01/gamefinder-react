import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import Loader from "../component/loader";
import ReactPlayer from "react-player";
import Layout from "../layout/layout";

const SingleGameDetails = () => {
  const { id } = useParams();

  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);

  const specificGameDetails = async (selectedID) => {
    setLoading(true);
    const query = `*[_type =="game" && _id == "${selectedID}"]{gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url, trailerUrl }`;
    const gamedetails = await client.fetch(query);

    setGameData(gamedetails[0]);
    setLoading(false);
  };

  useEffect(() => {
    specificGameDetails(id);
  }, []);

  return (
    <Layout title="Game">
      <section>
        <div className="flex justify-center mt-5">
          {loading && <Loader></Loader>}
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-col lg:flex-row gap-4 justify-center border border-green-600">
            <div className="border border-yellow-500 w-full lg:w-1/2">
              <img
                className="avatar w-[100%]"
                src={gameData.imageUrl}
                alt={gameData.gameName}
              />
            </div>
            <div className="w-full lg:w-1/2 border border-blue-800">
              <h2 className="text-4xl font-bold">
                {gameData.gameName}{" "}
                <span className="badge badge-info">
                  {gameData.gameCategory?.categoryName}
                </span>
              </h2>
              <div className="mt-5 text-blue-100">
                <PortableText value={gameData.content} />
              </div>

              <p className="font-semibold mt-4">
                Popular user-defined tags for this product:
              </p>
              <div>
                <ul className="flex gap-2 mt-2">
                  {gameData?.tags?.map((tag) => (
                    <li className="badge badge-error">{tag}</li>
                  ))}
                </ul>
              </div>
              {/* modal */}
              <div className="border border-orange-400 mt-5">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn btn-info w-[150px]"
                  onClick={() =>
                    document.getElementById("trailer-modal").showModal()
                  }
                >
                  Trailer
                </button>
                <dialog id="trailer-modal" className="modal">
                  <div className="modal-box w-11/12 max-w-3xl">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg mb-3">
                      {gameData.gameName}
                    </h3>
                    <div>
                      <ReactPlayer controls url={gameData.trailerUrl} />
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SingleGameDetails;

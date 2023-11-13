import { createContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { toast } from "react-toastify";

export const SanityContext = createContext();

export const SanityDataProvider = ({ children }) => {
  const [games, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);

  const itemsPerPage = 6;

  const goNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //alert
  const addToCart = (addedGame) => {
    console.log("cart e added: ", addedGame);
    let cartInfo = [...cart];

    let alreadyAdded = cartInfo.find(
      (cartItem) => cartItem.gameName === addedGame.gameName
    );
    if (alreadyAdded) {
      setCart(cartInfo);
    } else {
      cartInfo = [...cartInfo, addedGame];
      setCart(cartInfo);
    }

    // let addedCart = [];
    // addedCart = [...cart, addedGame];

    // setCart(addedCart);

    toast("Added to the cart!");
  };

  const userSearch = (event) => {
    const searchedText = event.target.value;
    gameSearch(searchedText);
  };

  const selectedCategory = (event) => {
    const searchedCategory = event.target.value;
    categorySearch(searchedCategory);
  };

  const categorySearch = async (searchedCategory) => {
    setLoading(true);
    const query = `*[_type == "game"] {gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url }`;
    const searchedGames = await client.fetch(query);

    const filteredGames = searchedGames.filter(
      (game) => game.gameCategory.categoryName === `${searchedCategory}`
    );

    setAllGames(filteredGames);
    setLoading(false);
  };

  const gameSearch = async (searchedText) => {
    setLoading(true);

    const query = `*[_type == "game" && gameName match "${searchedText}*"] {gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url, trailerUrl }`;

    const searchedGames = await client.fetch(query);
    setAllGames(searchedGames);
    setLoading(false);
  };

  const getAllGames = async () => {
    setLoading(true);

    const rangeSelection = (currentPage - 1) * itemsPerPage;

    const query = `*[_type == "game"]{gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url, trailerUrl }[${rangeSelection} ... ${
      rangeSelection + itemsPerPage + 1
    }]`;

    const games = await client.fetch(query);

    setAllGames(games);

    setLoading(false);

    return games;
  };
  const getAllCategory = async () => {
    setLoading(true);
    const query = `*[_type == "category"]`;

    const gameCategories = await client.fetch(query);

    setCategories(gameCategories);

    setLoading(false);

    return games;
  };

  useEffect(() => {
    getAllGames();
    getAllCategory();
  }, [currentPage]);

  return (
    <SanityContext.Provider
      value={{
        games,
        loading,
        setLoading,
        categories,
        cart,
        setCart,
        addToCart,
        userSearch,
        selectedCategory,
        currentPage,
        goNextPage,
        goPrevPage,
      }}
    >
      {children}
    </SanityContext.Provider>
  );
};

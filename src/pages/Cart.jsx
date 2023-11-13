import React, { useContext } from "react";
import { SanityContext } from "../context/SanityContext";
import Layout from "../layout/layout";
import NewLayOut from "../layout/NewLayOut";

const Cart = () => {
  const { cart } = useContext(SanityContext);

  return (
    <NewLayOut title="Cart">
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Game</th>
                <th>Category</th>
                <th>Price</th>
                <th>Tags</th>
                <th>Checkout</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((game) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={game.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{game.gameName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-accent badge-sm">
                      {game.gameCategory.categoryName}
                    </span>
                  </td>
                  <td>{game.gamePrice}</td>
                  <th>
                    <ul>
                      {game.tags.map((tag) => (
                        <li>{tag}</li>
                      ))}
                    </ul>
                  </th>
                  <th>
                    <button className="btn btn-secondary btn-xs">
                      Checkout
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </NewLayOut>
  );
};

export default Cart;

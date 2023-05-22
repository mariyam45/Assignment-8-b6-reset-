/* eslint-disable react/prop-types */
// import React from 'react';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";

const Card = ({ card, handleAddToCart, markAsRead }) => {
  const { img, uName, uImg, date, time, title, hastag } = card;

  return (
    <div>
      <div className="card   bg-base-100  p-0 rounded-t-lg">
        <img src={img} alt="" className="rounded-t-lg" />

        <div className="card-body ">
          <div className="flex justify-between items-center">
            <div className="flex ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={uImg} />
                </div>
              </label>
              <div className="mx-3">
                <h4>{uName}</h4>
                <p className="text-xs">{date}</p>
              </div>
            </div>
            <p className="justify-between grow-0">
              {time}min read
              <FontAwesomeIcon
                onClick={() => handleAddToCart(card)}
                icon={faBookmark}
                id="bookmark-btn"
                className="btn btn-ghost btn-sm px-2"
              />
            </p>
          </div>

          <h2 className="card-title text-4xl">{title}</h2>
          <p>{hastag}</p>
          <div className="card-actions justify-end">
            <button
              // ----mark as read btn----
              onClick={() => markAsRead(time, card)}
              className="btn btn-link text-violet-500"
            >
              Mark as read
            </button>
          </div>
        </div>
        <hr className="my-3 w-2/3" />
      </div>
    </div>
  );
};

export default Card;

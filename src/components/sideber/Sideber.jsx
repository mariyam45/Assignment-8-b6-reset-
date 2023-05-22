import React from "react";

const Sideber = ({ cart }) => {
  // const cart = props.cart;
  // const { cart } = props;
  // console.log(cart);
  console.log(cart);
  let total = 0;
  let bookmarks = `
  
  `;

  for (const bCart of cart) {
    // -----timing------
    const minute = parseInt(bCart.time);
    total = total + minute;

    // ---add title----
    const bMarks = bCart.title;
    bookmarks = [...bookmarks, bMarks];

    // console.log(bookMark);
  }
  return (
    <div className="bg-slate-100 rounded-xl p-4">
      <h4 className="text-lg font-semibold text-violet-600 bg-violet-200 rounded-lg p-2 my-4">
        Spent time on read : <span>{total}</span> min
      </h4>
      <p className="text-lg font-bold">Bookmarked Blogs : {cart.length}</p>
      <p className="text-lg font-semibold bg-neutral-50 rounded-lg p-2 my-4">
        {bookmarks}
      </p>
      {/* <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{bookmarks}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Sideber;

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Sidebar = ({ cart, mark }) => {
  return (
    <div className=" bg-slate-100 rounded-xl p-4 sticky top-5">
      <h4 className="text-lg font-semibold text-violet-600 bg-violet-200 rounded-lg p-2 my-4">
        Spent time on read : <span>{mark}</span> min
      </h4>
      <p className="text-lg font-bold text-black">
        Bookmarked Blogs : {cart.length}
      </p>
      <div className="grid grid-cols-1 gap-2 mt-2">
        {cart.map((_, i) => {
          return (
            <p
              key={i}
              className="text-base font-semibold bg-neutral-50 rounded-lg p-2"
            >
              {_.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

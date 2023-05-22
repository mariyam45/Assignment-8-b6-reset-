import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-bold">
          1. What is difference between props vs state?
        </div>
        <div className="collapse-content">
          <p className="text-lg font-semibold">
            State is owned locally and the component itself updates it. Props
            are owned and read-only by a parent. Props can be changed only if an
            upstream shift is caused by a callback function passed on to the
            child.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-bold">
          2. How does useState work?
        </div>
        <div className="collapse-content">
          <p className="text-lg font-semibold">
            useState is React Hook that allows you to add state to a functional
            component. It returns an array with two values: the current state
            and a function to update it. The Hook takes an initial state value
            as an argument and returns an updated state value whenever the
            setter function is called.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-bold">
          3. Purpose of useEffect other than fetching data.
        </div>
        <div className="collapse-content">
          <p className="text-lg font-semibold">
            The useEffect in react js allows you to perform side effects in your
            components. The react useEffect examples of side effects include
            retrieving data, direct DOM updates, and timers. The second argument
            is optional.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-bold">
          4. How Does React work?
        </div>
        <div className="collapse-content">
          <p className="text-lg font-semibold">
            React creates a virtual dom in memory. Instead of manipulating the
            browser's DOM directly, React creates a virtual DOM in memory, where
            it does all the necessary manipulating, before making the changes in
            the browser DOM. React only changes what needs to be changed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

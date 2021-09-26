import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="my-4 py-2 bg-gray-100 mx-auto max-w-sm rounded-xl flex flex-col items-center">
      <div>
        <button className=" bg-gray-200 px-4 py-1 text-sm text-black font-semibold rounded-full border border-gray-400 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
          Singleplayer
        </button>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://tse3.mm.bing.net/th?id=OIP.NbPVwuvEiIQI4Ry2dWX9EQAAAA&pid=Api&P=0"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://tse4.mm.bing.net/th?id=OIP.gdsYnuzqxcjHkrkFHhMYFAHaBw&pid=Api&P=0"
          />
        </a>
      </div>
      <div className=" col-span-10 px-10">
        <input
          className=" w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        <button>
          <img
            className="h-8 inline-block px-5"
            alt="voice-icon"
            src="https://tse1.mm.bing.net/th?id=OIP.2PbiXNCGCA7sKYyEr6QbCQHaHa&pid=Api&P=0"
          />
        </button>
      </div>
      <div className=" col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;

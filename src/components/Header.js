import React from "react";

const Header = () => {
  return (
    <header className="w-full max-h-[12vh] min-h-[12vh] bg-orange-500 flex justify-between items-center">
      <div className="w-1/5 text-center">
        <h1 className="flex px-5 text-4xl text-white font-semibold tracking-wider">
          The Gita
        </h1>
      </div>
      <nav className="w-1/3">
        <ul className="flex justify-around text-xl text-white  tracking-wide  ">
          <li className="cursor-pointer  px-8 py-3 rounded-md hover:bg-white hover:text-orange-500 hover:font-bold transition-all ease-in">
            Chapters
          </li>
          <li className="cursor-pointer  px-8 py-3 rounded-md hover:bg-white hover:text-orange-500 hover:font-bold transition-all ease-in">
            Get Random Verse
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

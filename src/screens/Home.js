import React from "react";
import Header from "../components/Header";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Home = () => {
  return (
    <section className="w-full max-h-[100vh] ">
      <Header />
      <div className="max-h-[88vh] min-h-[88vh] bg-gradient-to-r from-yellow-200 to-red-300 flex items-end px-5 py-12">
        <div className="w-full h-[30vh] flex justify-evenly items-center">
          <div className="bg-white w-16 h-16 rounded-full border-4 border-orange-400 flex justify-center items-center text-2xl text-orange-500 hover:bg-orange-400 hover:text-white hover:border-white">
            <BsChevronLeft />
          </div>
          <div className="flex justify-around items-center gap-5 w-3/4">
            <div className="flex flex-col text-center w-1/6 h-[30vh] bg-white text-orange-500 rounded-lg shadow-md">
              <h3 className="text-xl ">CHAPTER 1</h3>
              <p>Arjuna Visada Yoga</p>
              <div className="flex w-full justify-center">
                <button className="px-4 py-1 text-sm rounded-lg bg-orange-500 text-white font-bold tracking-wider">
                  Read..
                </button>
              </div>
            </div>
            <div className="flex flex-col w-1/6 h-[30vh] bg-white text-orange-500 rounded-lg shadow-md">
              <h3>CHAPTER 1</h3>
              <p>Arjuna Visada Yoga</p>
              <button>Read..</button>
            </div>
            <div className="flex flex-col w-1/6 h-[30vh] bg-white text-orange-500 rounded-lg shadow-md">
              <h3>CHAPTER 1</h3>
              <p>Arjuna Visada Yoga</p>
              <button>Read..</button>
            </div>
            <div className="flex flex-col w-1/6 h-[30vh] bg-white text-orange-500 rounded-lg shadow-md">
              <h3>CHAPTER 1</h3>
              <p>Arjuna Visada Yoga</p>
              <button>Read..</button>
            </div>
            <div className="flex flex-col w-1/6 h-[30vh] bg-white text-orange-500 rounded-lg shadow-md">
              <h3>CHAPTER 1</h3>
              <p>Arjuna Visada Yoga</p>
              <button>Read..</button>
            </div>
            <div className="flex flex-col w-1/6 h-[30vh] bg-white text-orange-500 rounded-lg shadow-md">
              <h3>CHAPTER 1</h3>
              <p>Arjuna Visada Yoga</p>
              <button>Read..</button>
            </div>
          </div>
          <div className="bg-white w-16 h-16 rounded-full border-4 border-orange-400 flex justify-center items-center text-2xl text-orange-500 hover:bg-orange-400 hover:text-white hover:border-white">
            <BsChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

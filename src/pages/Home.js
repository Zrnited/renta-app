import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiOutlineSearch } from 'react-icons/ai'

const Home = () => {
  return <div>
    <Header />

    <main className="mt-8 lg:mt-16">
      <section className="h-660 bg-herosection bg-cover bg-center relative flex flex-col items-center justify-center gap-5">
          <div className="w-5/6 flex flex-col gap-3">
            <h1 className="font-bold text-white text-4xl leading-tight tracking-wider lg:text-5xl">Discover the perfect property</h1>
            <p className="text-customWhite text-sm font-light md:text-lg">Find real estate to purchase, rent and sell without hassle.</p>
          </div>
          
          <div className="bg-white p-3 rounded-md w-5/6 md:pb-5 lg:w-2/3">
            <div className="flex justify-around">
              <h1>For sale</h1>
              <h1>To rent</h1>
            </div>
            <div className="w-full bg-slate-200 h-1 rounded-md mt-1 mb-3"></div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-left font-bold md:text-base">Search city or state</p>
              <div className="flex flex-col md:flex-row md:gap-4">
                <input 
                  placeholder="e.g Lekki or Enugu"
                  className="h-10 outline outline-customGray outline-2 px-3 w-full rounded-lg focus:outline-customBlue focus:shadow-md focus:outline-2 mb-2 md:mb-0 md:outline-1"
                />
                <button className="flex flex-row gap-2 justify-center items-center bg-customBlue w-full py-2 rounded-md text-white md:w-56 md:py-2 md:outline md:outline-1 md:outline-customBlue md:items-center">
                <i><AiOutlineSearch /></i>
                <p>Search</p>
              </button>
              </div>
            </div>
          </div>
      </section>
    </main>

    <Footer />
  </div>;
};

export default Home;

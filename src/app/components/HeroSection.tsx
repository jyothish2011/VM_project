"use client";

import React, { useState } from "react";
import Image from "next/image";
import LocationIcon from "../assets/LocationIcon.svg";
import Calender from "../assets/Calender.svg";
import Users from "../assets/Users.svg";
import TickIcon from "../assets/TickIcon.svg";
// import Airbnb from "../assets/Airbnb.svg";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("search");

  // Function to switch between tabs
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section className="lg:py-8 mx-auto">
        <div className="pt-10 px-6 text-start">
          <h1 className="text-black mb-4 text-xl sm:text-2xl lg:text-4xl font-extrabold">
            The best prices on Airbnbs anywhere
          </h1>
          <p className="text-black text-start font-bold text-base sm:text-lg mb-6 mx-4 lg:mx-28 lg:text-xl">
            Make deals with hosts on their empty nights
          </p>
        </div>
        <div className="pt-6 flex">
          <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl p-4">
            <div className="flex justify-center items-center gap-6">
              <span
                onClick={() => handleTabClick("search")}
                className={`cursor-pointer text-lg font-medium ${
                  activeTab === "search"
                    ? "text-green-700 font-bold underline underline-offset-4"
                    : "text-black font-bold"
                }`}
              >
                Search Deals
              </span>
              <span
                onClick={() => handleTabClick("name")}
                className={`cursor-pointer text-lg font-medium ${
                  activeTab === "name"
                    ? "text-green-700 font-bold underline underline-offset-4"
                    : "text-black font-bold"
                }`}
              >
                Name Your Own Price
              </span>
            </div>
            <div className="flex justify-center pt-6">
              <div className="w-full border rounded-2xl border-black bg-white">
                {activeTab === "search" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
                    <div className="flex items-center gap-3">
                      <Image src={LocationIcon} alt="location" />
                      <div>
                        <p className="font-bold text-black">Location</p>
                        <input
                        type="text"
                        placeholder="Enter your destination"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={Calender} alt="dates" />
                      <div>
                        <p className="font-bold text-black">Dates</p>
                        <input
                        type="text"
                        placeholder="Select dates"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={Users} alt="users" />
                      <div>
                        <p className="font-bold text-black">Travelers</p>
                        <input
                          type="text"
                          placeholder="Add guests"
                          className="focus:outline-none focus:ring-0 text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
                    <div className="flex items-center gap-3">
                      <Image src={LocationIcon} alt="location" />
                      <div>
                        <p className="font-bold text-black">Location</p>
                        <input
                        type="text"
                        placeholder="Enter your destination"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={Calender} alt="dates" />
                      <div>
                        <p className="font-bold text-black">Dates</p>
                        <input
                        type="text"
                        placeholder="Select dates"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={Calender} alt="price" />
                      <div>
                        <p className="font-bold text-black">Price</p>
                        <input
                          type="text"
                          placeholder="Maximum nightly price"
                          className="focus:outline-none focus:ring-0 text-black w-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={Users} alt="users" />
                      <div>
                        <p className="font-bold text-black">Travelers</p>
                        <input
                          type="text"
                          placeholder="Add guests"
                          className="focus:outline-none focus:ring-0 text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex justify-center pt-4">
                  <button className="border border-green-900 w-auto rounded-3xl px-4 py-2 text-white bg-green-900 hover:bg-green-800">
                    Find Deals
                  </button>
                </div>
                <div className="flex justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Image src={TickIcon} alt="tick" width={20} height={20} />
                    <p className="text-black font-bold">
                      Flexible Cancellation Policies
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={TickIcon} alt="tick" width={20} height={20} />
                    <p className="text-black font-bold">
                      Same properties you see on Airbnb
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={TickIcon} alt="tick" width={20} height={20} />
                    <p className="text-black font-bold">Best Prices</p>
                  </div>
                </div>
                <div className="w-full border-t border-black mt-4"></div>
                <div className="flex justify-center pt-2">
                  <p className="text-green-600 font-medium text-base">
                    Search the best deals available anywhere on short-term
                    rentals right now
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <Image src={Airbnb} alt="tick" />
          </div> */}
        </div>
      </section>
    </div>
  );
}

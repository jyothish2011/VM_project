"use client";

import React, { useState } from "react";

export default function CityGallery() {
  const cities = [
    {
      name: "Atlanta",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=300&h=200&fit=crop",
    },
    {
      name: "Austin",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=300&h=200&fit=crop",
    },
    {
      name: "Denver",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=300&h=200&fit=crop",
    },
    {
      name: "Puerto Rico",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1579687196544-08ae57ab5c11?w=300&h=200&fit=crop",
    },
    {
      name: "Florence",
      country: "Italy",
      image:
        "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=300&h=200&fit=crop",
    },
    {
      name: "Seattle",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1438401171849-74ac270044ee?w=300&h=200&fit=crop",
    },
    {
      name: "Mykonos",
      country: "Greece",
      image:
        "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=300&h=200&fit=crop",
    },
    {
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=200&fit=crop",
    },
    {
      name: "Porto",
      country: "Portugal",
      image:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=300&h=200&fit=crop",
    },
    {
      name: "Bangkok",
      country: "Thailand",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=300&h=200&fit=crop",
    },
    {
      name: "New York",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop",
    },
    {
      name: "Los Angeles",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=300&h=200&fit=crop",
    },
    {
      name: "Nashville",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1545419913-775e3e82c7db?w=300&h=200&fit=crop",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const citiesToShow = 4;

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + citiesToShow < cities.length ? prevIndex + 1 : prevIndex
    );
  };
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <div className="pt-20">
      <div className="relative bg-white shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:bg-gradient-to-b from-green-600 to-green-900 p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities
            .slice(currentIndex, currentIndex + citiesToShow)
            .map((city, index) => (
              <div
                key={index}
                className="relative border rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start px-4 pb-4">
                  <h3 className="text-white font-semibold text-lg">
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
        </div>

        <div className="absolute inset-0 flex justify-between items-center mt-4">
          <button
            onClick={handlePrevSlide}
            className="bg-gray-300 text-gray-700 w-10 h-10 rounded-full hover:bg-gray-400 flex items-center justify-center"
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-gray-300 text-gray-700 w-10 h-10 rounded-full hover:bg-gray-400 flex items-center justify-center"
            disabled={currentIndex + citiesToShow >= cities.length}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center pt-16 px-4">
        <p className="text-black font-medium text-2xl text-center">
          We are currently live in 35 cities and counting
        </p>
        <p className="text-[#004236] font-medium text-xl text-center">
          Are you a host in a city we are not yet live in? Become a host and
          help us launch there.
        </p>
      </div>
    </div>
  );
}


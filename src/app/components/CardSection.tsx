import React from "react";
import Image from "next/image";
import CardImg1 from "../assets/CardImg1.svg";
import CardImg2 from "../assets/CardImg2.svg";

export default function CardSection() {
  return (
    <div className="pt-36 relative">
      {/* Background container */}
      <div className="bg-[#DEEEFB] h-80 rounded-2xl p-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4 relative bottom-20">
          <div className="flex-1 bg-white w-auto shadow-2xl rounded-3xl">
            <div className="">
              <Image src={CardImg1} alt="tick" />
              <div className="p-5">
                <p className="text-black font-semibold text-xl">Hosts</p>
                <p className="text-black font-medium text-lg mx-5 py-2">
                  Tramona is the only platform built specifically for hosts to
                  <span className="font-semibold">
                    {" "}
                    fill their hard-to-book, empty nights.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Card for Travelers */}
          <div className="flex-1 bg-white shadow-2xl rounded-3xl">
            <div>
              <Image src={CardImg2} alt="tick" />
              <div className="p-5">
                <p className="text-black font-semibold text-xl">Travelers</p>
                <p className="text-black font-medium text-lg mx-5 py-2">
                  Tramona is the only platform where travelers can consistently
                  find the
                  <span className="font-semibold"> best prices on Airbnbs</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

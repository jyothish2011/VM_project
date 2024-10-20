import React from "react";
import Image from "next/image";
import FooterPartImg from "../assets/FooterPartImg.svg";
import TickIcon from "../assets/TickIcon.svg";
import LocationIcon from "../assets/LocationIcon.svg";
import Calender from "../assets/Calender.svg";
import Users from "../assets/Users.svg";

export default function Footer() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center md:justify-start">
          <Image src={FooterPartImg} alt="location" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <h2 className="text-xl md:text-2xl text-black font-semibold">
            Hosts: Fill Your Empty Nights and Earn More
          </h2>
          <p className="text-base md:text-xl text-black font-normal pt-5">
            Whether you&apos;re in one of our &apos;Book It Now&apos; cities or
            elsewhere in the U.S., you can list your property and start earning.
            Accept &apos;Name Your Own Price&apos; offers from travelers
            nationwide.
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Image src={TickIcon} alt="tick" width={20} height={20} />
              <p className="text-black font-normal">
                50K Protection per booking
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Users} alt="tick" width={20} height={20} />
              <p className="text-black font-normal">
                3 Levels of verification for travelers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Calender} alt="tick" width={20} height={20} />
              <p className="text-black font-normal">
                Easy to sync your calendar up with other platforms to prevent
                double bookings
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={LocationIcon} alt="tick" width={20} height={20} />
              <p className="text-black font-normal">24/7 support</p>
            </div>
            <div className="flex items-center pt-4">
              <button className="border border-green-900 w-auto rounded-lg px-4 py-2 text-white bg-green-900 hover:bg-green-800">
                List your property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

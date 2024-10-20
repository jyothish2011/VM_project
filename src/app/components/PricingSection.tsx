import React from "react";
import Image from "next/image";
import LocationIcon from "../assets/LocationIcon.svg";
import Calender from "../assets/Calender.svg";
import Users from "../assets/Users.svg";
import Frame from "../assets/Frame.svg";

export default function PricingSection() {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="px-4 md:px-6 lg:px-8 py-8 lg:py-24">
              <p className="font-bold text-2xl lg:text-3xl text-black">
                Name Your Own Price—
                <span className="font-normal">Anywhere in the U.S.</span>
              </p>
              <p className="text-black text-base lg:text-center">
                When hosts have vacancies, no one wins.
              </p>
              <div className="pt-8">
                <ol className="list-decimal list-inside font-medium text-black text-base">
                  <li>Where you want to go</li>
                  <li>How much you want to spend</li>
                  <li>Amount of guests</li>
                  <li>Your dates</li>
                </ol>
              </div>
              <div className="pt-2 font-medium text-black text-base">
                <p>
                  Your request then goes out to every host in that area with a
                  vacancy
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="w-full h-auto rounded-xl bg-white shadow-2xl p-6 md:p-8">
              <p className="text-center pt-4 text-[#71717A] font-medium">
                Send a request to every host in{" "}
                <span className="text-[#134E4A] font-bold">LOS ANGELES</span>
              </p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="w-full h-auto border rounded-lg border-black bg-white">
                  <div className="flex items-center gap-3 py-2 px-2">
                    <Image src={LocationIcon} alt="location" />
                    <div className="w-full">
                      <p className="font-bold text-black">Location</p>
                      <input
                        type="text"
                        placeholder="Enter your destination"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto border rounded-lg border-black bg-white">
                  <div className="flex items-center gap-3 py-2 px-2">
                    <Image src={Calender} alt="location" />
                    <div className="w-full">
                      <p className="font-bold text-black">Check-in/Check-out</p>
                      <input
                        type="text"
                        placeholder="Select dates"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto border rounded-lg border-black bg-white">
                  <div className="flex items-center gap-3 py-2 px-2">
                    <Image src={Users} alt="location" />
                    <div className="w-full">
                      <p className="font-bold text-black">Number of guests</p>
                      <input
                        type="text"
                        placeholder="Add guests"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto border rounded-lg border-black bg-white">
                  <div className="flex items-center gap-3 py-2 px-2">
                    <Image src={LocationIcon} alt="location" />
                    <div className="w-full">
                      <p className="font-bold text-black">
                        Maximum nightly price
                      </p>
                      <input
                        type="text"
                        placeholder="Maximum nightly price"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Image src={LocationIcon} alt="location" />
                  <p className="text-[#7D7D7D] font-medium">More filter</p>
                </div>

                <div className="w-full border-t border-black pt-2"></div>

                <div className="flex justify-center text-center gap-2">
                  <p className="text-black font-medium">
                    Have a property you like? We’ll send your request directly
                    to the host.
                  </p>
                </div>

                <div className="w-full h-auto border rounded-lg border-black bg-white">
                  <div className="flex items-center gap-3 py-2 px-2">
                    <Image src={Frame} alt="Frame" />
                    <div className="w-full">
                      <p className="font-bold text-black">Airbnb link</p>
                      <input
                        type="text"
                        placeholder="Paste link here"
                        className="focus:outline-none focus:ring-0 text-black w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <button className="border border-green-900 w-auto rounded-xl px-4 py-2 text-white bg-green-900 hover:bg-green-800">
                    Submit request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="bg-[#F4F6F8] h-auto rounded-2xl p-4 sm:p-8 md:p-12 lg:p-16">
            <p className="text-black text-2xl sm:text-3xl font-semibold text-center">
              How Tramona works
            </p>
            <div className="flex flex-col gap-4 sm:px-10 md:px-16 lg:px-20 pt-8 sm:pt-10 md:pt-12">
              <p className="text-black text-lg sm:text-xl font-medium text-left">
                <span className="font-semibold">For Travelers:</span> Submit
                your travel request with dates, location, and budget, or use the
                &quot;Book it Now&quot; option to instantly book available stays
                at great prices. Hosts review your custom requests and send
                personalized offers, and once you agree on the price, you can
                book directly through Tramona.
              </p>
              <p className="text-black text-lg sm:text-xl font-medium text-left">
                <span className="font-semibold">For Hosts:</span> Receive
                traveler requests or enable the &quot;Book it Now&quot; feature
                for instant bookings. You control the price and get the option
                to fill vacancies by offering deals directly to travelers.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <button className="border border-green-900 w-auto rounded-xl px-4 py-2 text-white bg-green-900 hover:bg-green-800">
                How it works
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

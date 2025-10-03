import React from "react";
import { Button } from "../ui/button";
// import Stats from "../Reusales/Stats";
// import SearchComp from "../Reusales/SearchComp";
import Link from "next/link";
import AppHeader from "../Headers/AppHeader";
// import SearchBar from "../Reusales/SearchBar";

const Hero = () => {
  return (
    <section className="p-4 bg-black min-h-[100vh] hero-cover">
      <div className="relative rounded-2xl">
        <AppHeader />
        {/* Overlay */}
        <div className="absolute inset-0 z-0 rounded-2xl" />
        <section className="h-full relative z-10 max-w-7xl mx-auto pt-36 md:pt-36">
          <div className="md:w-1/2 mx-auto">
            <div>
              <h1 className="font-bold text-6xl text-center md:text-6xl lg:text-8xl text-white">
                Welcome to
                <br /> SmoothRent
              </h1>
              <p className="mt-4 text-center text-lg md:text-xl text-white/90">
                Renting a home in Nigeria just got easier. Smooth Rent is a
                digital rental marketplace that makes the entire process simple,
                safe, and rewarding.
              </p>
              <div className="flex justify-center items-center space-x-4 pt-4">
                <Link href="/properties">
                  <Button
                    className="px-12 bg-[#F8D57E] text-black hover:text-black hover:bg-[#e6c85c] border-0"
                    size="xl"
                  >
                    Make Inquiry
                  </Button>
                </Link>
              </div>
              <div className="pt-6">
                {/* <Stats /> */}
                {/* <SearchComp /> */}
              </div>
              {/* <SearchBar /> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;

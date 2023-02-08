import React from "react";
import Swiper from "./Swipe";

export default function Home() {
  return (
    <>
      <div class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <a class="block rounded-xl bg-white p-6 sm:p-8" href="">
          <div class="mt-16 sm:pr-8">
            <h3 class="text-xl font-bold text-gray-900">
              Science of Chemistry
            </h3>

            <p class="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              adipisci.
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

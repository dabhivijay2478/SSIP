import React from "react";
import Swiper from "./Swipe";

export default function Home() {
  return (
    <>
      <div className="mt-5">
        <article class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm">
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="#">
              <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>

            <div class="mt-4 flex flex-wrap gap-1">
              <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Snippet
              </span>

              <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
          </div>
        </article>

        <div class="rounded-[10px] mt-5 bg-white p-4 flex justify-center  !pt-20 sm:p-6"></div>

        <div>vijay</div>
      </div>
    </>
  );
}
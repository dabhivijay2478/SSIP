import React from "react";

export default function Home() {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <a className="block rounded-xl bg-white p-6 sm:p-8" href="">
          <div className="mt-16 sm:pr-8">
            <h3 className="text-xl font-bold text-gray-900">
              Welcome to Jan Seva Kendra Admin Dashboard
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Jan Seva Kendra is a government-run service center that provides a
              wide range of services to citizens in a convenient and accessible
              manner. As an administrator, you play a crucial role in ensuring
              the smooth functioning of the center and delivering high-quality
              services to citizens. With this dashboard, you have access to
              important information and tools that will help you manage and
              monitor the day-to-day operations of the center.
            </p>
          </div>
        </a>
      </div>
      <div>
        <a
          class="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
          href=""
        >
          <div class="mt-4 text-gray-500 sm:pr-8">
            <h3 class="mt-4 text-xl font-bold text-gray-900">
         Total Main services provided: [ 7 ]
            </h3>

            <p class="mt-2 hidden text-sm sm:block">
            
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

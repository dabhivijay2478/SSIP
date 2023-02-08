import React from 'react'
import { Link } from 'react-router-dom'

export default function Sucesspage() {
  return (
    <>
    <div>Sucesspage</div>
    
    <Link
    class="group  mt-10 relative inline-flex items-center overflow-hidden rounded bg-green-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    
    to="/Dash/Addservice"
  >
    <span class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>

    <span class="text-sm font-medium transition-all group-hover:ml-4">
      Back Dash
    </span>
  </Link>
    </>
  )
}

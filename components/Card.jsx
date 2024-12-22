/* eslint-disable react/prop-types */
import React from "react";

export default function Card({ title, done }) {
  return (
    <div
      className={`bg-white h-auto tracking-wide mb-4 mx-1 rounded-lg relative transition duration-500 ease-in-out transform border-2 border-gray hover:border-indigo-500 focus:shadow-outline focus:outline-none shadow-lg ${
        done ? "border-green-600" : ""
      }`}
    >
      <h5 className="text-2xl py-4 pl-5 text-gray-700 capitalize">
        {title}{" "}
        {done && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-600 float-right mr-5 tick_animation"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </h5>
    </div>
  );
}

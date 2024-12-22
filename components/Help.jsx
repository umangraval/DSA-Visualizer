import React, { useState } from "react";

export default function Help({ desc, video }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="float-right mt-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 inline-block text-indigo-500 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-1/2">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl">Help</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-red-600 h-6 w-6 text-2xl inline-block">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative max-h-80v p-6 flex-auto overflow-y-scroll">
                  <p className="text-slate-500 text-lg leading-relaxed">
                    <iframe
                      className="w-full h-96 rounded-lg"
                      src={video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="text-xl my-3 text-indigo-600">
                      Desciption
                    </div>
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

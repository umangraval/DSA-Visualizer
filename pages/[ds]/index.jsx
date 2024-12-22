/* eslint-disable react/prop-types */
import React from "react";
import { requireAuth } from "utils/auth";
import { DS_LIST, DS_PAGE } from "utils/template";

function DS({ ds }) {
  return (
    <div className="px-5 md:w-2/3 mx-auto mt-5">
      <div className="grid gap-6 md:grid-cols-3">
        {DS_PAGE.map((intro) => (
          <div
            className="w-full mb-4 px-2 hover:shadow-xl rounded border-2 hover:text-indigo-500 text-gray-700"
            key={intro.name}
          >
            <a
              href={
                intro.url == "/contactus" ? intro.url : "/" + ds + intro.url
              }
            >
              <div className="relative bg-white">
                <div className="mx-auto border-b">{intro.icon()}</div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <p className="stretched-link">{intro.name}</p>
                  </h3>
                  <p className="block mb-2 text-sm text-gray-600">{ds}</p>
                  <p>{intro.desc(ds)}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default requireAuth(DS);

// Limit to valid DS only
export async function getStaticProps(context) {
  const { ds } = context.params;

  // Validate DS
  if (!DS_LIST.includes(ds)) {
    return { notFound: true };
  }

  return {
    props: { ds },
  };
}

// For build time static generation
export async function getStaticPaths() {
  return {
    paths: DS_LIST.map((ds) => {
      return { params: { ds } };
    }),
    fallback: false,
  };
}

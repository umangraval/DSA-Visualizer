import React, { useState, useRef } from "react";
import { requireAuth } from "utils/auth";
import { DS } from "utils/template";
import { helpers } from "../utils/helpers";
import Link from "next/link";
import Fuse from "fuse.js";

function Home() {
  const searchInput = useRef();
  const [query, updateQuery] = useState("");
  const [result, updateResult] = useState(DS);

  const fuse = new Fuse(DS, {
    keys: ["sub.name"],
    threshold: 0.3,
  });

  const findFeature = (e) => {
    updateQuery(e.target.value);
    if (e.target.value)
      updateResult(fuse.search(query).map((obj) => (obj = obj.item)));
    else updateResult(DS); // show no results when empty query
  };
  return (
    <div className="w-full bg-gradient-to-r from-indigo-300">
      <div className="container mx-auto md:h-full">
        <div className="flex relative mx-10 md:mx-auto md:w-1/2 max-w-md shadow-lg md:mb-10 my-10">
          <input
            ref={searchInput}
            value={query}
            onChange={(e) => findFeature(e)}
            className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-2 top-3 mr-4">
            <svg
              className="text-black h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>

        {result.length == 0 ? (
          <h1 className="text-2xl text-gray-700 text-center">
            No Results Found..
          </h1>
        ) : (
          result.map((category) => (
            <div className="mx-10 pt-15" key={category.name}>
              <div className="grid gap-6 mb-8 md:grid-cols-4">
                <h1 className="my-5 text-3xl font-semibold text-gray-700 dark:text-gray-200 w-full">
                  {category.name}:
                </h1>
                {category.sub.map((subcategory) => (
                  <Link href={subcategory.url} key={subcategory.name} passHref>
                    <div className="min-w-0 p-4 inline-block text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-sm hover:shadow-2xl">
                      <h4 className="mb-4 font-semibold text-lg">
                        {subcategory.name}
                      </h4>
                      <p>{helpers.shorttext(subcategory.desc)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default requireAuth(Home);

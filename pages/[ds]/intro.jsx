import React from "react";
import { requireAuth } from "utils/auth";
import { useRouter } from "next/router";
import { DS, DS_LIST } from "utils/template";
import Image from "next/image";

function intro({ desc, img, name, algorithm }) {
  const router = useRouter();

  return (
    <div className="container mx-auto h-full">
      <div
        onClick={() => router.back()}
        className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
      >
        Back
      </div>
      <div className="text-center px-10">
        <h3 className="text-indigo-500 text-xl font-semibold">Introduction</h3>
        <h1 className="text-4xl pb-5 text-gray-700">{name}</h1>
        <p className="text-gray-500 text-lg">{desc}</p>
      </div>
      <div className="flex flex-wrap text-center md:mt-10">
        <div className="md:w-1/2 md:mx-auto px-5 overflow-y-auto">
          <h3 className="text-indigo-500 text-xl font-semibold py-2">
            Algorithm
          </h3>
          <p className="text-xl pb-10 text-gray-700 text-justify">
            {algorithm}
          </p>
        </div>
        <div className="md:w-1/2 md:h-1/2 my-5 px-5 md:py-15 mx-auto">
          <Image src={img} width="380" height="380" />
        </div>
      </div>
    </div>
  );
}

export default requireAuth(intro);

// Limit to valid DS only
export async function getStaticProps(context) {
  const { ds } = context.params;
  const valid = {};
  DS.map((cat) => {
    cat.sub.map((subcat) => {
      if ("/" + ds == subcat.url) {
        valid.desc = subcat.desc;
        valid.name = subcat.name;
        valid.img = subcat.img;
        valid.algorithm = subcat.algorithm;
      }
    });
  });

  return {
    props: valid,
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

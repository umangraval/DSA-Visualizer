import React from "react";
import { requireAuth } from "utils/auth";
import { useRouter } from "next/router";
import { DS, DS_LIST } from "utils/template";

function tutorial({ video, name }) {
  const router = useRouter();
  return (
    <div className="container mx-auto h-full">
      <div
        onClick={() => router.back()}
        className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
      >
        Back
      </div>
      <div className="flex flex-col md:flex-row text-center h-full md:mt-20">
        <div className="md:w-1/2 my-5 md:py-15 mx-auto">
          <div className="h-full shadow-xl">
            <iframe
              className="w-full h-full rounded-lg"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="md:w-1/2 my-4 md:py-20 md:mx-auto p-1">
          <h3 className="text-indigo-500 text-xl font-semibold py-2">
            Video Tutorial
          </h3>
          <h1 className="text-4xl pb-10 text-gray-700">{name}</h1>
          <p className="text-gray-500">
            Watch this video to learn more about {name}.
            <br /> For any query, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default requireAuth(tutorial);

// Limit to valid DS only
export async function getStaticProps(context) {
  const { ds } = context.params;
  const valid = {};
  DS.map((cat) => {
    cat.sub.map((subcat) => {
      if ("/" + ds == subcat.url) {
        valid.video = subcat.video;
        valid.name = subcat.name;
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

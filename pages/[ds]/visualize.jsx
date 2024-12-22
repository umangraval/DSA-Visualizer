import React from "react";
import { requireAuth } from "utils/auth";
import { useRouter } from "next/router";
import { DS, DS_LIST } from "utils/template";
import { getVisualization } from "utils/handlers";
import Help from "components/Help";

function visualize({ ds, help }) {
  const router = useRouter();
  return (
    <div className="container mx-auto h-full">
      <div
        onClick={() => router.back()}
        className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
      >
        Back
      </div>
      <Help desc={help.desc} video={help.video} />
      {getVisualization(ds)}
    </div>
  );
}

export default requireAuth(visualize);

// Limit to valid DS only
export async function getStaticProps(context) {
  const { ds } = context.params;
  const valid = {};
  DS.map((cat) => {
    cat.sub.map((subcat) => {
      if ("/" + ds == subcat.url) {
        valid.ds = ds;
        valid.help = subcat.help;
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

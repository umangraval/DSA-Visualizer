import React, { useEffect, useState } from "react";
import { requireAuth } from "utils/auth";
import { useRouter } from "next/router";
import { DS, DS_LIST } from "utils/template";
import { onSnapshot, collection } from "@firebase/firestore";
import { db } from "utils/db";
import Card from "components/Card";
import ExampleCard from "components/ExampleCard";
import { createContent } from "utils/db";
import { useAuth } from "utils/auth";
import { triggerToast } from "utils/handlers";

function examples({ name }) {
  const [egcontent, setegcontent] = useState([]);
  const [view, setView] = useState(null);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, `data-structures/${name}/examples`),
      (data) => {
        setegcontent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
    return unsub;
  }, []);

  const handleSubmit = async () => {
    if (!title || !content)
      return triggerToast({ type: "error", message: "All Fields Required!" });
    try {
      await createContent(content, name, title, auth.user.name, "examples");
      setContent("");
      setTitle("");
      setShow(false);
      return triggerToast({ type: "success", message: "Created!" });
    } catch (e) {
      console.log(e);
      triggerToast({ type: "error", message: "Failed" });
    }
  };

  return (
    <div
      className="container mx-auto h-full"
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        onClick={() => router.back()}
        className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
      >
        Back
      </div>
      <div className="py-10">
        <span id="examples" className="text-4xl pb-10 text-gray-700">
          Examples
        </span>
        {auth.user.isTeacher && (
          <>
            <button
              className="text-white inline-block bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg float-right mb-3"
              onClick={() => setShow(!show)}
            >
              {!show ? "Create" : "Close"}
            </button>
            <div
              className={`clear-both p-4 bg-white h-auto tracking-wide mb-4 mx-1 rounded-lg relative transition duration-500 ease-in-out transform border-2 border-gray hover:border-indigo-500 focus:shadow-outline focus:outline-none shadow-lg ${
                !show && "hidden"
              }`}
            >
              <h5 className="text-2xl text-gray-700 capitalize">
                Create New Example
              </h5>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title For Example"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                onChange={(e) => setTitle(e.target.value.toLowerCase())}
              />
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                Content
              </label>
              <textarea
                name="content"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                className="text-white inline-block bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {egcontent.length == 0 ? (
          <div className="text-xl text-center pt-10">No Content !!</div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              {egcontent.map((doc) => (
                <div key={doc.id} onClick={() => setView(doc)}>
                  <Card title={doc.title} />
                </div>
              ))}
            </div>
            <div>
              {view ? (
                <ExampleCard
                  id={view.id}
                  content={view.content}
                  dstype={name}
                  title={view.title}
                  page={"examples"}
                  setView={setView}
                />
              ) : (
                <h2 className="text-center">Select an Example</h2>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default requireAuth(examples);

// Limit to valid DS only
export async function getStaticProps(context) {
  const { ds } = context.params;
  const valid = {};
  DS.map((cat) => {
    cat.sub.map((subcat) => {
      if ("/" + ds == subcat.url) {
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

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { onSnapshot, doc } from "@firebase/firestore";
import { db } from "utils/db";
import { useAuth } from "utils/auth";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("components/Editor"), { ssr: false });

export default function ExampleCard({
  id,
  content,
  dstype,
  title,
  page,
  setView,
}) {
  const [main, setmain] = useState(content);
  const [show, setShow] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, `data-structures/${dstype}/${page}`, id),
      (data) => {
        setmain(data.data() ? data.data().content : "");
      }
    );
    return unsub;
  }, [id]);

  return (
    <div className="bg-white h-auto tracking-wide mb-4 mx-1 rounded-lg relative border-2 border-gray focus:shadow-outline focus:outline-none shadow-lg p-5">
      <span className="text-2xl text-gray-700 capitalize mb-3">{title}</span>
      {auth.user.isTeacher && (
        <button
          className="text-white inline-block bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg float-right mb-3"
          onClick={() => setShow(!show)}
        >
          {!show ? "Change" : "Close"}
        </button>
      )}
      <hr className="border-1 clear-both" />

      {show && (
        <>
          <Editor
            uid={id}
            initcontent={content}
            dstype={dstype}
            setmain={setmain}
            setShow={setShow}
            page={page}
            setView={setView}
          />
        </>
      )}

      <div
        className={show && "hidden"}
        dangerouslySetInnerHTML={{ __html: main }}
      />
    </div>
  );
}

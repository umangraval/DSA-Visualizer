import React, { useState, useEffect } from "react";
import { requireAuth } from "utils/auth";
import { useRouter } from "next/router";
import { onSnapshot, collection, query, where } from "@firebase/firestore";
import { db, getProblemsCount } from "utils/db";

function Progress() {
  const [problems, setProblems] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const router = useRouter();
  const { regno } = router.query;

  useEffect(async () => {
    setCount(await getProblemsCount());
    const q = query(
      collection(db, "users"),
      where("regno", "==", regno),
      where("isteacher", "==", false)
    );
    const unsub = onSnapshot(q, (data) => {
      if (!data.docs.length) return router.replace("/");
      setName(data.docs[0].data().name);
      const arr = [];
      if (data.docs[0].data().initDS)
        Object.keys(data.docs[0].data().initDS).forEach((e) => {
          arr = [
            ...arr,
            ...data.docs[0]
              .data()
              .initDS[e].map((n) => ({ name: n, category: e })),
          ];
        });
      setProblems(arr);
    });
    return unsub;
  }, []);

  useEffect(async () => {
    setCount(await getProblemsCount());
  }, []);

  return (
    <div className="container mx-auto h-full">
      <div
        onClick={() => router.back()}
        className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
      >
        Back
      </div>
      <div className="text-2xl py-7">
        Problems completed by {name} are {problems.length}/{count}. Progress is{" "}
        <span className="bg-yellow-400">
          {((problems.length * 100) / count).toFixed(2)} %
        </span>
      </div>
      <table className="min-w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              #
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Problem Name
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, i) => (
            <tr key={i} className={`${i % 2 == 0 && "bg-gray-100"} border-b`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {i}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {problem.name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {problem.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default requireAuth(Progress);

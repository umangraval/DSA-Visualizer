import React, { useState, useEffect } from "react";
import { onSnapshot, collection, query, where } from "@firebase/firestore";
import { db } from "utils/db";
import { requireAuth } from "utils/auth";
import { triggerToast } from "utils/handlers";
import { createUser } from "utils/db";
import Link from "next/dist/client/link";

function Manage() {
  const [regno, setRegno] = useState("");
  const [name, setName] = useState("");
  const [disable, setDisable] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"), where("isteacher", "==", false));
    const unsub = onSnapshot(q, (data) => {
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const addUser = async () => {
    try {
      if (!regno || !name)
        return triggerToast({
          type: "error",
          message: "Please enter the fields!!",
        });
      setDisable(true);
      await createUser(regno, name);
      setDisable(false);
      triggerToast({ type: "success", message: "Added Successfully !!" });
    } catch {
      triggerToast({ type: "error", message: "No Permission !!" });
    }
  };

  const deleteStudent = async (uid) => {
    try {
      const settings = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid }),
      };
      await fetch(`/api/deleteUser/`, settings);
      triggerToast({ type: "success", message: "Deleted Successfully !!" });
    } catch {
      triggerToast({ type: "error", message: "Please try again !!" });
    }
  };

  return (
    <div className="container mx-auto p-5">
      <span id="manage" className="text-4xl pb-10 text-gray-700">
        Manage Students
      </span>
      <div className="flex items-center gap-5 my-10">
        Create New Student:
        <input
          className="border border-black rounded-lg p-1"
          type="text"
          name="regno"
          value={regno}
          placeholder="Enter RegNo"
          onChange={(e) => setRegno(e.currentTarget.value.toLowerCase())}
        />
        <input
          className="border border-black rounded-lg p-1"
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <div
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
          style={disable ? { pointerEvents: "none", opacity: "0.7" } : {}}
          onClick={() => addUser()}
        >
          Submit
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
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
                      Registration No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 == 0 && "bg-gray-100"} border-b`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.regno}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap">
                        <span
                          className="text-sm inline-block cursor-pointer font-semibold border px-3 py-2 rounded-lg text-red-500 border-red-500 hover:bg-red-600 hover:text-white mr-3"
                          onClick={() => deleteStudent(user.id)}
                        >
                          Delete
                        </span>
                        <Link href={`/manage/${user.regno}`}>
                          <span className="text-sm inline-block cursor-pointer font-semibold border px-3 py-2 rounded-lg text-green-500 border-green-500 hover:bg-green-600 hover:text-white">
                            Progress
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default requireAuth(Manage);

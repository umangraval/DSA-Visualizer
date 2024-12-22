import React, { useState } from "react";
import { triggerToast } from "utils/handlers";
import LinkedList from "../algorithm/linkedlist";
import Circle from "components/Circle";
import Arrow from "components/Arrow";

const linkedList = new LinkedList();

const LinkedListComp = () => {
  const [number, setNumber] = useState(0);
  const [type, setType] = useState("Singly");
  const [arr, setArr] = useState(linkedList.print());

  const addElement = () => {
    if (arr.length < 9) {
      const stime = new Date();
      linkedList.push(number);
      setArr(linkedList.print());
      setNumber(number + 1);
      const etime = new Date();
      triggerToast({
        type: "success",
        message: `Inserted in ${(etime - stime) / 1000} secs !!`,
      });
    } else {
      triggerToast({
        type: "error",
        message: "Max Capacity Reached to show!!",
      });
    }
  };

  const onDelete = () => {
    if (arr.length > 0) {
      linkedList.pop();
      setArr(linkedList.print());
      setNumber(number - 1);
    } else {
      triggerToast({ type: "error", message: "List is Empty!!" });
    }
  };

  return (
    <div className="h-full">
      <div className="text-4xl text-center mb-4">{type} Linked List</div>
      <div className="h-1/3 flex justify-center items-center m-5 p-5">
        {arr.length && type == "Doubly" ? (
          <>
            NULL <Arrow key={`img-singly-{i}`} type={type} />
          </>
        ) : (
          <></>
        )}
        {arr.map((e, i) => (
          <>
            <Circle key={`circle-singly-{i}`} element={e} length={arr.length} />
            <Arrow key={`img-singly-{i}`} type={type} />
          </>
        ))}
        {arr.length ? "NULL" : "Empty List"}
      </div>
      <div className="w-full flex justify-center items-center gap-2 m-5 p-5">
        <input
          type="radio"
          id="singly"
          name="type"
          value="Singly"
          defaultChecked
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="singly">Singly</label>
        <input
          type="radio"
          id="doubly"
          name="type"
          value="Doubly"
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="doubly">Doubly</label>
        <div
          onClick={() => addElement()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
        >
          Insert
        </div>
        <div
          onClick={() => onDelete()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 mt-5 ml-7 md:ml-0 cursor-pointer"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default LinkedListComp;

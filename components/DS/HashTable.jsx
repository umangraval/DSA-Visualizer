import React, { useState } from "react";
import { triggerToast } from "utils/handlers";
import { helpers } from "utils/helpers";
import HashTable from "../algorithm/hashtable";

const hashTable = new HashTable();

const HashTableComp = () => {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("linear");
  const [arr, setArr] = useState(hashTable.print());
  const [index, setIndex] = useState(-1);

  const addElement = async () => {
    if (number == "")
      return triggerToast({
        type: "info",
        message: "Enter a number!!",
      });

    const stime = new Date();
    const status = hashTable.put(number, type);
    const etime = new Date();
    if (status === -1)
      return triggerToast({
        type: "error",
        message: "Max Capacity Reached!!",
      });
    setArr(hashTable.print());
    triggerToast({
      type: "success",
      message: `Inserted in ${(etime - stime) / 1000} secs !!`,
    });
    setNumber("");
    setIndex(status);
    await helpers.sleep(1500);
    setIndex(-1);
  };

  const reset = () => {
    hashTable.reset();
    setArr(hashTable.print());
    setNumber("");
  };

  return (
    <div className="h-full">
      <div className="text-4xl text-center mb-4">Hash Table</div>
      <div className="h-1/3 flex justify-center items-center m-5 p-5">
        {arr.map((e, i) => (
          <div key={i} className="grid grid-row-2 text-center">
            <div
              className={
                "border-black border-2 rounded p-4 text-xl font-bold " +
                (i == index ? "bg-red-400" : "bg-yellow-400")
              }
            >
              {e}
            </div>
            <span>{i}</span>
          </div>
        ))}
      </div>
      <div
        className="w-full flex justify-center items-center gap-4 m-5 p-5"
        style={index != -1 ? { pointerEvents: "none", opacity: "0.5" } : {}}
      >
        <input
          className="border border-black rounded-lg p-1"
          type="number"
          name="number"
          placeholder="Enter Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div
          onClick={() => addElement()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Insert
        </div>
        <div
          onClick={() => reset()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Reset
        </div>
        <div className="grid grid-row-3">
          <div>
            <input
              type="radio"
              id="linear"
              name="type"
              value="linear"
              defaultChecked
              onChange={(e) => {
                setType(e.target.value);
                reset();
              }}
            />
            <label htmlFor="linear"> Linear Probing: f(i) = i</label>
          </div>
          <div>
            <input
              type="radio"
              id="quadratic"
              name="type"
              value="quadratic"
              onChange={(e) => {
                setType(e.target.value);
                reset();
              }}
            />
            <label htmlFor="quadratic"> Quadratic Probing: f(i) = i * i</label>
          </div>
          <div>
            <input
              type="radio"
              id="double"
              name="type"
              value="double"
              onChange={(e) => {
                setType(e.target.value);
                reset();
              }}
            />
            <label htmlFor="double">
              {" "}
              Double Hashing: f(i) = i * hash2(e); hash2(e) = e % 7
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashTableComp;

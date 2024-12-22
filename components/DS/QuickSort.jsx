import React, { useState } from "react";
import quickFun from "../algorithm/quicksort";
import { triggerToast } from "utils/handlers";
import SingleBar from "components/SingleBar";

const QuickSortComp = () => {
  const [arr, setArr] = useState([
    { number: 69, color: "#f4124b" },
    { number: 56, color: "#f4124b" },
    { number: 10, color: "#f4124b" },
    { number: 89, color: "#f4124b" },
    { number: 8, color: "#f4124b" },
    { number: 56, color: "#f4124b" },
    { number: 58, color: "#f4124b" },
    { number: 34, color: "#f4124b" },
  ]);

  const [disable, setDisable] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [time, setTime] = useState(2);

  const resizeArr = (len) => {
    if (len > 15 || len < 2)
      return triggerToast({
        type: "error",
        message: "Size Exceeded",
      });
    const newArr = [];
    for (let i = 0; i < len; i++) {
      newArr.push({
        number: Math.floor(Math.random() * 100),
        color: "#f4124b",
      });
    }
    setArr(newArr);
  };

  const handleClick = async () => {
    if (sorted) triggerToast({ type: "info", message: "Already Sorted!!" });
    else if (arr.length !== 0) {
      triggerToast({
        type: "info",
        message: "Quick Sort is Running ! Don't click any Button",
      });

      setDisable(true);
      const stime = new Date();
      await quickFun(setArr, arr, time);
      const etime = new Date();

      for (let i = 0; i < arr.length; i++) {
        arr[i].color = "#23ff00";
      }

      triggerToast({
        type: "success",
        message: `Quick Sort Completed in ${(etime - stime) / 1000} secs !!`,
      });
      setSorted(true);
      setDisable(false);
    }
  };

  const handleRandom = () => {
    if (arr.length <= 15) {
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push({
          number: Math.floor(Math.random() * 100),
          color: "#f4124b",
        });
      }
      setSorted(false);
      setArr(newArr);
    }
  };

  return (
    <div className="h-full">
      <div className="text-4xl text-center mb-4">QuickSort</div>

      <div className="h-1/2">
        <div className="w-full flex flex-row justify-center items-end mb-0">
          {arr.map((e, i) => {
            return (
              <SingleBar
                key={`BarKey-${i}`}
                width={arr.length}
                height={e.number}
                color={e.color}
              />
            );
          })}
        </div>

        <div className="w-full flex justify-center flex-row items-center">
          {arr.map((e, i) => (
            <div
              key={`num-${i}`}
              className="mt-3 ml-0 font-bold text-center flex justify-center items-center"
              style={{
                width: `${Math.floor(1300 / arr.length)}px`,
              }}
            >
              {e.number}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full m-5 p-5">
        <div className="flex justify-center gap-2">
          <div className="w-5 h-5 bg-orange-400 ml-10 border"></div> Upperbound
          <div className="w-5 h-5 bg-blue-700 ml-10 border"></div> Pivot
          <div className="w-5 h-5 bg-yellow-200 ml-10 border"></div> Swap
          <div className="w-5 h-5 bg-sky-300 ml-10 border"></div> Compare
        </div>
        <div
          className="flex justify-center items-center gap-2 mt-8"
          style={disable ? { pointerEvents: "none", opacity: "0.7" } : {}}
        >
          Time (1 - 10 sec)
          <input
            type="range"
            min="1"
            max="10"
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
          />
          <input
            className="border border-black rounded-lg p-1"
            type="number"
            name="size"
            placeholder="Enter Size"
            onChange={(e) => resizeArr(e.target.value)}
          />
          <div
            onClick={() => handleClick()}
            className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
          >
            Sort
          </div>
          <div
            onClick={() => handleRandom()}
            className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
          >
            Random
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSortComp;

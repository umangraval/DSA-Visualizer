import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useState } from "react";
import { triggerToast } from "utils/handlers";

const BstComp = () => {
  const { ref, insert, remove, clear, search } = useBinarySearchTree();

  const [insertValue, setInsertValue] = useState(NaN);
  const [removeValue, setRemoveValue] = useState(NaN);
  const [findValue, setFindValue] = useState(NaN);
  const [len, setLen] = useState(3);

  const insertElement = () => {
    if (isNaN(insertValue))
      return triggerToast({ type: "error", message: "Enter a number!!" });
    const stime = new Date();
    insert(insertValue);
    const etime = new Date();
    triggerToast({
      type: "success",
      message: `Inserted in ${(etime - stime) / 1000} secs !!`,
    });
    setLen(len + 1);
  };

  const removeElement = () => {
    if (isNaN(removeValue))
      return triggerToast({ type: "error", message: "Enter a number!!" });
    if (!remove(removeValue))
      return triggerToast({ type: "error", message: "Not Found!!" });
    setLen(len - 1);
  };

  const findElement = () => {
    if (isNaN(findValue))
      return triggerToast({ type: "error", message: "Enter a number!!" });
    if (search(findValue))
      triggerToast({ type: "success", message: "Element Found!!" });
    else triggerToast({ type: "error", message: "Not Found!!" });
  };

  return (
    <div className="h-full">
      <div className="text-4xl text-center mb-4">Binary Search Tree</div>
      <div className="min-h-1/2 flex text-center justify-center">
        <BinarySearchTree data={[1, -2, 3]} ref={ref} />
        {len == 0 && <div className="m-auto text-xl">Empty Tree</div>}
      </div>

      <div className="w-full flex justify-center items-center gap-4 m-5 p-5">
        <input
          className="border border-black rounded-lg p-1"
          type="number"
          placeholder="Enter Number"
          onChange={(e) => setInsertValue(parseInt(e.currentTarget.value))}
        />
        <div
          onClick={() => insertElement()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Insert
        </div>
        <input
          className="border border-black rounded-lg p-1"
          type="number"
          placeholder="Enter Number"
          onChange={(e) => setRemoveValue(parseInt(e.currentTarget.value))}
        />
        <div
          onClick={() => removeElement()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Remove
        </div>
        <input
          className="border border-black rounded-lg p-1"
          type="number"
          placeholder="Enter Number"
          onChange={(e) => setFindValue(parseInt(e.currentTarget.value))}
        />
        <div
          onClick={() => findElement()}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Find
        </div>
        <div
          onClick={() => {
            clear();
            setLen(0);
          }}
          className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 ml-7 md:ml-0 cursor-pointer"
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default BstComp;

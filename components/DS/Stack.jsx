import React, { useState } from "react";
import { triggerToast } from "utils/handlers";
import Square from "components/Square";
import Stack, { infixtoPostfix } from "components/algorithm/stack";

const stack = new Stack();

const StackComp = () => {
  const [curr, setCurr] = useState(-1);
  const [infix, setInfix] = useState("");
  const [arr, setArr] = useState(stack.print());
  // eslint-disable-next-line no-unused-vars
  const [top, setTop] = useState(0);
  const [postfix, setPostfix] = useState("");
  const [disable, setDisable] = useState(false);

  const convert = async () => {
    setPostfix("");
    if (infix.length == 0) {
      return triggerToast({ type: "error", message: "No Expression Found!!" });
    }
    setDisable(true);
    const stime = new Date();
    setPostfix(
      await infixtoPostfix(infix, stack, setArr, setTop, setPostfix, setCurr)
    );
    const etime = new Date();
    triggerToast({
      type: "success",
      message: `Postfix Generated in ${(etime - stime) / 1000} secs !!`,
    });
    setDisable(false);
  };

  return (
    <div className="h-full">
      <div className="text-4xl text-center mb-4">Stack - Infix to Postfix</div>

      <div className="h-1/2 grid grid-cols-3">
        <div className="grid grid-flow-row">
          <div className="text-2xl flex justify-center items-center">
            Infix Expression:
          </div>
          <div className="text-3xl flex justify-center items-start">
            {infix.length > 0
              ? infix.split("").map((e, i) => (
                  <span
                    key={i}
                    className={
                      curr == i ? "bg-yellow-300 font-bold p-2 rounded" : ""
                    }
                  >
                    {e}
                  </span>
                ))
              : "-"}
          </div>
        </div>

        <div className={`grid grid-rows-6 gap-1 p-1 items-end justify-center`}>
          {6 - arr.length > 0 && (
            <div className={`row-span-${6 - arr.length}`}></div>
          )}
          {arr
            .slice(0)
            .reverse()
            .map((e, i) => (
              <div key={`${e} - ${i}`} className={i == 0 && "stacktop"}>
                <Square key={i} element={e} top={i == 0} />
              </div>
            ))}

          {arr.length == 0 && "Empty Stack"}
          <hr className="border-2 border-black" />
        </div>

        <div className="grid grid-flow-row">
          <div className="text-2xl flex justify-center items-center">
            Postfix Expression:
          </div>
          <div className="flex justify-center items-start text-3xl">
            {postfix.length > 0 ? postfix : "-"}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-2 mt-10">
        <div style={disable ? { pointerEvents: "none", opacity: "0.5" } : {}}>
          <input
            className="border border-black rounded-lg p-1"
            type="text"
            name="exp"
            placeholder="Enter Expression"
            onChange={(e) => setInfix(e.target.value)}
          />
          <div
            onClick={() => convert()}
            className="inline-block text-sm font-semibold border px-4 py-2 rounded-lg text-white hover:bg-indigo-600 bg-indigo-500 md:ml-1 cursor-pointer"
          >
            Convert
          </div>
        </div>
        <div className="w-5 h-5 bg-orange-400 ml-10 border"></div> Stack Top
      </div>
    </div>
  );
};

export default StackComp;

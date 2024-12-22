import Dfs from "components/DS/Dfs";
import QuickSortComp from "components/DS/QuickSort";
import StackComp from "components/DS/Stack";
import HashTableComp from "components/DS/HashTable";
import { toast } from "react-toastify";
import BstComp from "components/DS/Bst";
import Bfs from "components/DS/Bfs";
const { default: LinkedListComp } = require("components/DS/LinkedList");

export function triggerToast({ type, message }) {
  const options = {
    autoClose: 3000,
    type:
      type === "error"
        ? toast.TYPE.ERROR
        : type === "info"
        ? toast.TYPE.INFO
        : toast.TYPE.SUCCESS,
    position: toast.POSITION.TOP_CENTER,
  };
  console.log("Toast triggered:", { type, message });
  toast(message, options);
}

export const getVisualization = (ds) => {
  switch (ds) {
    case "linkedlist":
      return <LinkedListComp />;
    case "quicksort":
      return <QuickSortComp />;
    case "dfs":
      return <Dfs start={{ col: 4, row: 3 }} end={{ col: 17, row: 7 }} />;
    case "stacks":
      return <StackComp />;
    case "hashtable":
      return <HashTableComp />;
    case "binary-trees":
      return <BstComp />;
    case "bfs":
      return <Bfs start={{ col: 4, row: 3 }} end={{ col: 7, row: 7 }} />;
  }
  return <div className="text-4xl text-center">Visualization Not Found!</div>;
};

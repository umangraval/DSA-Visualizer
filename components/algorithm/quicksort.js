import { helpers } from "utils/helpers";

const quickSort = async (setArr, ArrForSorting, time) => {
  const swap = async (arr, a, b) => {
    arr[a].color = "#FEE715FF";
    arr[b].color = "#FEE715FF";
    setArr([...arr]);
    await helpers.sleep(time * 1000);
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    setArr([...arr]);
    await helpers.sleep(time * 1000);
    arr[a].color = "#f4124b";
    arr[b].color = "#f4124b";
  };

  const partition = async (arr, lowerBound, upperBound) => {
    let pivotIdx = upperBound;
    const pivotElement = arr[lowerBound].number;
    arr[lowerBound].color = "#1B37EC";
    setArr([...arr]);

    for (let i = upperBound; i > lowerBound; i--) {
      arr[i].color = "#1BECD9";
      arr[pivotIdx].color = "#F18E0F";
      setArr([...arr]);
      await helpers.sleep(time * 1000);
      if (arr[i].number >= pivotElement) {
        // Swapping Arr[i] and Arr[pivotIndex]
        await swap(arr, i, pivotIdx);
        pivotIdx--;
      }
      arr[i].color = "#f4124b";
      setArr([...arr]);
      await helpers.sleep(time * 1000);
    }

    // Swapping Arr[pivotIdx] and Arr[lowerBound]
    await swap(arr, pivotIdx, lowerBound);

    arr[lowerBound].color = "#f4124b";
    setArr([...arr]);

    return pivotIdx;
  };

  const quickSort = async (arr, low, high) => {
    if (arr.length === 0) {
      return;
    }
    setArr([...arr]);
    if (low < high) {
      const index = await partition(arr, low, high);
      await quickSort(arr, low, index - 1);
      await quickSort(arr, index + 1, high);
    }
  };

  await quickSort(ArrForSorting, 0, ArrForSorting.length - 1);
};

export default quickSort;

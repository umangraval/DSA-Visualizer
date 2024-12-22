import { helpers } from "utils/helpers";

class Stack {
  constructor() {
    this.stackarr = [];
  }

  push(e) {
    this.stackarr.push(e);
  }

  pop() {
    if (this.stackarr.length == 0) return "empty stack";
    return this.stackarr.pop();
  }

  peek() {
    return this.stackarr[this.stackarr.length - 1];
  }

  isEmpty() {
    return this.stackarr.length == 0;
  }

  print() {
    const arr = this.stackarr;
    return arr;
  }
}

export const infixtoPostfix = async (
  exp,
  stackarr,
  setArr,
  setTop,
  setPostfix,
  setCurr
) => {
  const operator = (op) => {
    if (
      op == "+" ||
      op == "-" ||
      op == "^" ||
      op == "*" ||
      op == "/" ||
      op == "(" ||
      op == ")"
    ) {
      return true;
    }
    return false;
  };

  const precedency = (pre) => {
    if (pre == "(" || pre == ")") {
      return 1;
    } else if (pre == "+" || pre == "-") {
      return 2;
    } else if (pre == "/" || pre == "*") {
      return 3;
    } else if (pre == "^") {
      return 4;
    }
    return 0;
  };

  let postfix = "";

  for (let i = 0; i < exp.length; i++) {
    const el = exp[i];
    setCurr(i);

    if (operator(el)) {
      if (el == ")") {
        while (stackarr.peek() != "(") {
          postfix += stackarr.pop();
          setPostfix(postfix);
          setArr(stackarr.print());
          setTop(stackarr.peek());
          await helpers.sleep(2000);
        }
        stackarr.pop();
        setArr(stackarr.print());
        setTop(stackarr.peek());
      } else if (el == "(") {
        stackarr.push(el);
        setArr(stackarr.print());
        setTop(stackarr.peek());
        await helpers.sleep(2000);
      } else if (precedency(el) > precedency(stackarr.peek())) {
        stackarr.push(el);
        setArr(stackarr.print());
        setTop(stackarr.peek());
        await helpers.sleep(2000);
      } else {
        while (
          precedency(el) <= precedency(stackarr.peek()) &&
          !stackarr.isEmpty()
        ) {
          postfix += stackarr.pop();
          setPostfix(postfix);
          setArr(stackarr.print());
          setTop(stackarr.peek());
          await helpers.sleep(2000);
        }
        stackarr.push(el);
        setArr(stackarr.print());
        setTop(stackarr.peek());
        await helpers.sleep(2000);
      }
    } else {
      postfix += el;
      setPostfix(postfix);
      await helpers.sleep(2000);
    }
  }

  while (!stackarr.isEmpty()) {
    postfix += stackarr.pop();
    setPostfix(postfix);
    setArr(stackarr.print());
    setTop(stackarr.peek());
    await helpers.sleep(2000);
  }
  setCurr(-1);

  return postfix;
};

export default Stack;

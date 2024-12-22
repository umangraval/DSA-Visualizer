import { app } from "./firebase";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  arrayUnion,
  getDocsFromServer,
} from "firebase/firestore";

export const db = getFirestore(app);

// get user by uid
export const getUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return docSnap.data();
  return null;
};

// create example
export const createContent = async (content, dstype, title, author, page) => {
  await addDoc(collection(db, `data-structures/${dstype}/${page}`), {
    title,
    content,
    author,
  });
};

// create user
export const createUser = async (regno, name) => {
  await addDoc(collection(db, `users`), {
    isteacher: false,
    regno,
    name,
  });
};

// update example content
export const updateContent = async (uid, content, dstype, page) => {
  const docRef = doc(db, `data-structures/${dstype}/${page}`, uid);
  await updateDoc(docRef, {
    content,
  });
};

// delete example
export const deleteContent = async (uid, dstype, page) => {
  const docRef = doc(db, `data-structures/${dstype}/${page}`, uid);
  await deleteDoc(docRef);
};

// mark as done
export const markDone = async (uid, ds, problem) => {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    [`initDS.${ds}`]: arrayUnion(problem),
  });
};

// get total problems
export const getProblemsCount = async () => {
  let total = 0;
  const ls = [
    "Linkedlist",
    "Stacks",
    "DFS",
    "BFS",
    "Quicksort",
    "Binary Tree",
    "Hashtable",
  ];
  for (const ds of ls) {
    const coll = collection(db, `data-structures/${ds}/problems`);
    const snapshot = await getDocsFromServer(coll);
    total += snapshot.size;
  }
  return total;
};
